import { createContext } from 'react';

const SIGNS_DEFAULT_DATA = {
  uid: '',
  title: '',
};

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
  signs: [SIGNS_DEFAULT_DATA],
  setSigns: () => {},
} as IContextProps);

export default SignsContext;