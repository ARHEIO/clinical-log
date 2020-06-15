export interface Post {
  name: Name; // name of user posting
  time: string; // date of posting
  content: string;
}

export interface Name {
  firstName: string;
  lastName: string;
}

export interface Reacts {
  like: number;
  haha: number;
  wow: number;
  sad: number;
}

export interface PublicPost extends Post {
  isVenting: boolean;
  reacts: Reacts;
}
