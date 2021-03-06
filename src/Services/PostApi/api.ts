/* eslint-disable no-plusplus */
/* eslint-disable default-case */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import { PublicPost, Post } from './models';

const publicPosts: PublicPost[] = [
  {
    id: 4,
    name: {
      firstName: 'Enzo',
      lastName: 'Brooks',
    },
    time: new Date().toString(),
    content: 'Up to one-third of patients experience markers of distress during palliative ventilator withdrawal, study finds',
    isVenting: false,
    reacts: { wow: 12, haha: 0, like: 5, sad: 0 },
  },
  {
    id: 3,
    name: {
      firstName: 'Chris',
      lastName: 'Redfield',
    },
    time: '2020-06-15T03:40:44.816Z',
    content: 'Scientists have discovered a population of neurons that control hibernation-like behavior, or torpor, in mice',
    isVenting: false,
    reacts: { wow: 0, haha: 0, like: 12, sad: 0 },
  },
  {
    id: 2,
    name: {
      firstName: 'Chris',
      lastName: 'Redfield',
    },
    time: '2020-06-14T03:40:44.816Z',
    content: 'Scientists have discovered a population of neurons that control hibernation-like behavior, or torpor, in mice',
    isVenting: false,
    reacts: { wow: 0, haha: 0, like: 12, sad: 0 },
  },
  {
    id: 1,
    name: {
      firstName: 'Enzo',
      lastName: 'Brooks',
    },
    time: '2020-06-12T01:30:35.096Z',
    content: 'Today, @Jerry is officially cancer free!',
    isVenting: true,
    reacts: { wow: 0, haha: 0, like: 12, sad: 0 },
  },
];
const clinicalLogs: Post[] = [
  {
    id: 5,
    name: {
      firstName: 'Chris',
      lastName: 'Redfield',
    },
    time: '2020-06-12T01:30:35.096Z',
    content: 'Patient in room 78 blood pressure is 128/70',
  },
  {
    id: 4,
    name: {
      firstName: 'Samantha',
      lastName: 'Yule',
    },
    time: '2020-06-12T01:30:35.096Z',
    content: 'Patient in room 47 is showing decreased signs of self awareness',
  },
  {
    id: 3,
    name: {
      firstName: 'Samantha',
      lastName: 'Yule',
    },
    time: '2020-06-12T01:30:35.096Z',
    content: 'Patient in room 78 blood pressure is 134/96',
  },
  {
    id: 2,
    name: {
      firstName: 'Enzo',
      lastName: 'Brooks',
    },
    time: '2020-06-12T01:30:35.096Z',
    content: 'Patient in room 78 blood pressure is 139/104',
  },
  {
    id: 1,
    name: {
      firstName: 'Samantha',
      lastName: 'Yule',
    },
    time: '2020-06-12T01:30:35.096Z',
    content: 'Patient in room 78 blood pressure is 119/79',
  },
];

const successfulCall = (): boolean => (Math.round(Math.random() * 100)) < 101; // simulating a network failure

export const addNewClinicalLog = (newPost: Post): Promise<any> => new Promise((resolve) => {
  clinicalLogs.unshift(newPost);
  resolve();
});

export const addNewPublicPost = (newPost: PublicPost): Promise<any> => new Promise((resolve) => {
  publicPosts.unshift(newPost);
  resolve();
});

export const addReact = (index: number, reactType: string): Promise<PublicPost[]> => new Promise((resolve) => {
  switch (reactType) {
    case 'like':
      publicPosts[publicPosts.length - index].reacts.like++;
      break;
    case 'haha':
      publicPosts[publicPosts.length - index].reacts.haha++;
      break;
    case 'wow':
      publicPosts[publicPosts.length - index].reacts.wow++;
      break;
    case 'sad':
      publicPosts[publicPosts.length - index].reacts.sad++;
      break;
  }
  resolve(publicPosts);
});

export const getPublicPosts = (): Promise<PublicPost[]> => new Promise((resolve, reject) => setTimeout(() => (successfulCall() ? resolve(publicPosts) : reject()), 1000));

export const getClinicalLog = (): Promise<Post[]> => new Promise((resolve, reject) => setTimeout(() => (successfulCall() ? resolve(clinicalLogs) : reject()), 1000));
