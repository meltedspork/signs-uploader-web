import { createContext } from 'react';

const EMPTY_FUNCTION = () => {};
const SIGNS_DEFAULT_DATA = {
  uid: '',
  title: '',
};
const PAGINATION_DEFAULT_DATA = {
  page: 1,
  size: 0,
  total: 0,
};

interface ISignDataKeys {
  [key: string]: string | any;
}

interface ISignDataProps extends ISignDataKeys {
  uid: string,
  title: string,
};

interface IPaginationDataProps extends ISignDataKeys {
  page: number,
  size: number,
  total: number,
};

interface IContextProps {
  signs: [ISignDataProps],
  setSigns: Function,
  loading: boolean,
  setLoading: Function,
  error: any,
  setError: Function,
  pagination: IPaginationDataProps,
  setPagination: Function,
  page: number,
  setPage: Function,
  size: number,
  setSize: Function,
  fetchMore: [Function],
  setFetchMore: Function,
}

const SignsContext = createContext({
  loading: true,
  setLoading: EMPTY_FUNCTION,
  error: null,
  setError: EMPTY_FUNCTION,
  signs: [SIGNS_DEFAULT_DATA],
  setSigns: EMPTY_FUNCTION,
  pagination: PAGINATION_DEFAULT_DATA,
  setPagination: EMPTY_FUNCTION,
  page: PAGINATION_DEFAULT_DATA.page,
  setPage: EMPTY_FUNCTION,
  size: PAGINATION_DEFAULT_DATA.size,
  setSize: EMPTY_FUNCTION,
  fetchMore: [EMPTY_FUNCTION],
  setFetchMore: EMPTY_FUNCTION,
} as IContextProps);

export default SignsContext;