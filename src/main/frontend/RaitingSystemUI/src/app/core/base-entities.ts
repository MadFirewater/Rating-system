export class Links {
  self: Self;
}

export class Self {
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

