import { createContext } from 'react';

const SIGN_DEFAULT_DATA = {
  definition: '',
  pronounce: '',
  title: '',
  topics: [''],
  videoFile: null,
  videoUrls: [''],
};

interface IDataKeys {
  [key: string]: string | any;
}

interface ISignDataProps extends IDataKeys {
  definition: string,
  pronounce: string,
  title: string,
  topics: string[],
  videoFile: string | null,
  videoUrls: string[],
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