import {atom} from 'recoil';

export const account = atom<string | undefined>({
  key: 'rlyAccount',
  default: undefined,
});

export const balance = atom<number | undefined>({
  key: 'rlyBalance',
  default: undefined,
});
