import { createContext } from 'react';

interface ISignDataKeys {
  [key: string]: string | any;
}

interface ISignDataProps extends ISignDataKeys {
  uid: string,
  videoFile: any,
  title: string,
  pronounce: string,
  definition: string,
};

interface IContextProps {
  signData: ISignDataProps,
  setSignData: Function,
  readOnly: boolean,
}

const SignContext = createContext({
  signData: {
    uid: '',
    videoFile: null,
    title: '',
    pronounce: '',
    definition: '',
  },
  setSignData: () => {},
  readOnly: false,
} as IContextProps);

export default SignContext;