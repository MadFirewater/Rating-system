package com.chdtu.service;

import com.chdtu.bean.GroupRatingBean;
import com.chdtu.bean.GroupRatingForTopic;
import com.chdtu.domain.*;
import com.chdtu.repository.CriteriaRepository;
import com.chdtu.repository.GroupRepository;
import com.chdtu.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class RatingService {

    @Autowired
    GroupRepository groupRepository;

    @Autowired
    TeacherRepository teacherRepository;

    @Autowired
    CriteriaRepository criteriaRepository;

    private long criteriaNumber;


    public List<GroupRatingBean> getGroupRatingsForTeacher(Long teacherId) {
        Teacher teacher = teacherRepository.findOne(teacherId);
        Set<LearningProcess> learningProcesses = teacher.getLearningProcesses();
        List<GroupRatingBean> result = new ArrayList<>();
        for (LearningProcess learningProcess : learningProcesses) {
            GroupRatingBean groupRatingBean = new GroupRatingBean();
            for (Group group : learningProcess.getGroups()) {
                groupRatingBean.setGroupId(group.getId());
                groupRatingBean.setGroupName(group.getName());
                groupRatingBean.setSubjectName(learningProcess.getSubject().getName());
                getAverageRatingForGroup(learningProcess, group);
                groupRatingBean.setRatings(getAverageRatingForGroup(learningProcess, group));
            }
            result.add(groupRatingBean);
        }
        return result;
    }

    public List<GroupRatingForTopic> getAverageRatingForGroup(LearningProcess learningProcess, Group group) {
        criteriaNumber = criteriaRepository.findAll().spliterator().getExactSizeIfKnown();
        List<GroupRatingForTopic> result = new ArrayList<>();
        for (Topic topic : learningProcess.getTopics()) {
            double sum = 0;
            GroupRatingForTopic groupRatingForTopic = new GroupRatingForTopic();
            groupRatingForTopic.setTopicName(topic.getName());
            for (Student student : group.getStudents()) {
                sum += getAverageGradeForTopicAndStudent(topic.getId(), student.getGrades());
            }
            groupRatingForTopic.setAverageGrade(sum / (group.getStudents().size()));
            result.add(groupRatingForTopic);
        }
        return result;
    }


    public double getAverageGradeForTopicAndStudent(Long topicId, Set<Grade> grades) {
        int gradeSum = 0;
        for (Grade grade : grades) {
            if (grade.getTopic().getId().equals(topicId)) {
                gradeSum += grade.getValue();
            }
        }
        return gradeSum / criteriaNumber;
    }
}
