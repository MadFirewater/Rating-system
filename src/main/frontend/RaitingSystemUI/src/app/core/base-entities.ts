export class Links {
  self: BaseEntity;
}

export class BaseEntity {
  href: string;
}

export class UserInfo{
  username:string;
  role:string;
}

export class GroupRating {
  groupId: number;
  groupName: string;
  subjectName: string;
  ratings: Rating[];
}

export class Rating {
  topicName: string;
  averageGrade: number;
}

export class LearningProcesses {
  _links: BaseEntity;
  learningProcesses: BaseEntity;
  groups: BaseEntity;
  subject: BaseEntity;
  teachers: BaseEntity;
  topics: BaseEntity;
}

