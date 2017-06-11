package com.chdtu.bean;

import java.util.List;

public class GroupRatingBean {
    private Long groupId;
    private String groupName;
    private String subjectName;
    private List<GroupRatingForTopic> ratings;

    public Long getGroupId() {
        return groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public List<GroupRatingForTopic> getRatings() {
        return ratings;
    }

    public void setRatings(List<GroupRatingForTopic> ratings) {
        this.ratings = ratings;
    }
}
