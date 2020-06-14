export interface Post {
  name: string; // name of user posting
  time: string; // date of posting
  content: string;
}

export interface PublicPost extends Post {
  isVenting: boolean;
  reacts: {
    like: number;
    haha: number;
    wow: number;
    sad: number;
  };
}
