import { PublicPost, Post } from './models';

const publicPosts: PublicPost[] = [
  {
    name: 'Enzo Brooks',
    time: '2020-06-12T01:30:35.096Z',
    content: 'Today, @Jerry is officially cancer free!',
    isVenting: false,
    reacts: {
      angry: 0,
      haha: 0,
      like: 12,
      sad: 0,
    },
  },
];
const clinicalLogs: Post[] = [
  {
    name: 'Enzo Brooks',
    time: '2020-06-12T01:30:35.096Z',
    content: 'Patient 478 blood pressure is 128/70',
  },
];

export const getPublicPosts = (): Promise<PublicPost[]> => new Promise((resolve) => resolve(publicPosts));

export const getClinicalLog = (): Promise<Post[]> => new Promise((resolve) => resolve(clinicalLogs));
