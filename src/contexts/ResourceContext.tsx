import { createContext } from 'react';

const SIGN_DEFAULT_DATA = {
  videoFile: null,
  videoUrls: [''],
  title: '',
  pronounce: '',
  definition: '',
};

interface IDataKeys {
  [key: string]: string | any;
}

interface ISignDataProps extends IDataKeys {
  videoFile: string | null,
  videoUrls: string[],
  title: string,
  pronounce: string,
  definition: string,
};

interface ITopicProps extends IDataKeys {
  topic: string,
};

interface IContextProps {
  uid: string | null,
  setUid: Function,
  data: ISignDataProps | ITopicProps,
  setData: Function,
  inputData: ISignDataProps | ITopicProps,
  setInputData: Function,
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

const ResourceContext = createContext({
  loaded: false,
  setLoaded: () => {},
  loading: true,
  setLoading: () => {},
  error: null,
  setError: () => {},
  readOnly: false,
  setReadOnly: () => {},
  uid: null,
  setUid: () => {},
  data: SIGN_DEFAULT_DATA,
  setData: () => {},
  inputData: SIGN_DEFAULT_DATA,
  setInputData: () => {},
  reset: false,
  setReset: () => {},
} as IContextProps);

export default ResourceContext;