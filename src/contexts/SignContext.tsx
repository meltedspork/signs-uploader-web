import { createContext } from 'react';

const SIGN_DEFAULT_DATA = {
  videoFile: null,
  videoUrls: [''],
  title: '',
  pronounce: '',
  definition: '',
};

interface ISignDataKeys {
  [key: string]: string | any;
}

interface ISignDataProps extends ISignDataKeys {
  videoFile: any,
  videoUrls: string[],
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
  loaded: boolean,
  setLoaded: Function,
  loading: boolean,
  setLoading: Function,
  error: any,
  setError: Function,
  reset: boolean,
  setReset: Function,
}

const SignContext = createContext({
  loaded: false,
  setLoaded: () => {},
  loading: true,
  setLoading: () => {},
  error: null,
  setError: () => {},
  readOnly: false,
  setReadOnly: () => {},
  uid: '',
  setUid: () => {},
  signData: SIGN_DEFAULT_DATA,
  setSignData: () => {},
  inputSignData: SIGN_DEFAULT_DATA,
  setInputSignData: () => {},
  reset: false,
  setReset: () => {},
} as IContextProps);

export default SignContext;