import { createContext } from 'react';

interface ISignDataKeys {
  [key: string]: string | any;
}

interface ISignDataProps extends ISignDataKeys {
  uid: string,
  title: string,
};

interface IContextProps {
  signs: [ISignDataProps],
  setSigns: Function,
  loading: boolean,
  setLoading: Function,
  error: any,
  setError: Function,
}

const SignsContext = createContext({
  loading: true,
  setLoading: () => {},
  error: null,
  setError: () => {},
  signs: [{
    uid: '',
    title: '',
  }],
  setSigns: () => {},
} as IContextProps);

export default SignsContext;