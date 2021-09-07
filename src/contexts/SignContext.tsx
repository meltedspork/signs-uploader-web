import { createContext } from 'react';

interface ISignDataKeys {
  [key: string]: string | any;
}

interface ISignDataProps extends ISignDataKeys {
  videoFile: any,
  title: string,
  pronounce: string,
  definition: string,
};

interface IContextProps {
  uid: string,
  setUid: Function,
  signData: ISignDataProps,
  setSignData: Function,
  inputSignData: ISignDataProps,
  setInputSignData: Function,
  readOnly: boolean,
  setReadOnly: Function,
  loading: boolean,
  setLoading: Function,
  error: any,
  setError: Function,
}

const signData = {
  videoFile: null,
  title: '',
  pronounce: '',
  definition: '',
};

const SignContext = createContext({
  loading: true,
  setLoading: () => {},
  error: null,
  setError: () => {},
  readOnly: false,
  setReadOnly: () => {},
  uid: '',
  setUid: () => {},
  signData,
  setSignData: () => {},
  inputSignData: signData,
  setInputSignData: () => {},
} as IContextProps);

export default SignContext;