import { createContext } from 'react';

const SIGN_DEFAULT_DATA = {
  uid: null,
  definition: '',
  pronounce: '',
  title: '',
  topics: [],
  videos: [],
  videoFile: null,
};

interface IDataKeys {
  [key: string]: string | any;
}

interface ISignDataProps extends IDataKeys {
  uid: string | null,
  definition: string,
  pronounce: string,
  title: string,
  topics: string[] | null[],
  videos: string[] | null[],
  videoFile: string | null,
}

interface ITopicProps extends IDataKeys {
  topic: string,
}

interface IContextProps {
  uid: string | null,
  setUid: Function,
  data: ISignDataProps | ITopicProps,
  setData: Function,
  inputData: ISignDataProps | ITopicProps,
  setInputData: Function,
  readOnly: boolean,
  setReadOnly: Function,
  resetReadOnly: boolean,
  setResetReadOnly: Function,
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
  setLoaded: () => null,
  loading: true,
  setLoading: () => null,
  error: null,
  setError: () => null,
  readOnly: false,
  setReadOnly: () => null,
  resetReadOnly: false,
  setResetReadOnly: () => null,
  uid: null,
  setUid: () => null,
  data: SIGN_DEFAULT_DATA,
  setData: () => null,
  inputData: SIGN_DEFAULT_DATA,
  setInputData: () => null,
  reset: false,
  setReset: () => null,
} as IContextProps);

export default ResourceContext;