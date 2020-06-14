/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import { PublicPost, Post } from './models';

const publicPosts: PublicPost[] = [
  {
    name: 'Enzo Brooks',
    time: '2020-06-12T01:30:35.096Z',
    content: 'Up to one-third of patients experience markers of distress during palliative ventilator withdrawal, study finds',
    isVenting: false,
    reacts: { wow: 12, haha: 0, like: 5, sad: 0 },
  },
  {
    name: 'Chris Redfield',
    time: '2020-06-12T01:30:35.096Z',
    content: 'Scientists have discovered a population of neurons that control hibernation-like behavior, or torpor, in mice',
    isVenting: false,
    reacts: { wow: 0, haha: 0, like: 12, sad: 0 },
  },
  {
    name: 'Enzo Brooks',
    time: '2020-06-12T01:30:35.096Z',
    content: 'Today, @Jerry is officially cancer free!',
    isVenting: false,
    reacts: { wow: 0, haha: 0, like: 12, sad: 0 },
  },
];
const clinicalLogs: Post[] = [
  {
    name: 'Chris Redfield',
    time: '2020-06-12T01:30:35.096Z',
    content: 'Patient in room 78 blood pressure is 128/70',
  },
  {
    name: 'Samantha Yule',
    time: '2020-06-12T01:30:35.096Z',
    content: 'Patient in room 47 is showing decreased signs of self awareness',
  },
  {
    name: 'Samantha Yule',
    time: '2020-06-12T01:30:35.096Z',
    content: 'Patient in room 78 blood pressure is 134/96',
  },
  {
    name: 'Enzo Brooks',
    time: '2020-06-12T01:30:35.096Z',
    content: 'Patient in room 78 blood pressure is 139/104',
  },
  {
    name: 'Samantha Yule',
    time: '2020-06-12T01:30:35.096Z',
    content: 'Patient in room 78 blood pressure is 119/79',
  },
];

const successfulCall = (): boolean => (Math.round(Math.random() * 100)) < 95; // simulating a network failure

export const getPublicPosts = (): Promise<PublicPost[]> => new Promise((resolve, reject) => setTimeout(() => (successfulCall() ? resolve(publicPosts) : reject()), 1000));

export const getClinicalLog = (): Promise<Post[]> => new Promise((resolve, reject) => setTimeout(() => (successfulCall() ? resolve(clinicalLogs) : reject()), 1000));
