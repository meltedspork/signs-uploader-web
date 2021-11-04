import { createContext } from 'react';

const SIGNS_DEFAULT_DATA = {
  uid: '',
  title: '',
};

const PAGINATION_DEFAULT_DATA = {
  currentPage: 1,
  limit: 0,
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
  currentPage: number,
  limit: number,
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
}

const SignsContext = createContext({
  loading: true,
  setLoading: () => {},
  error: null,
  setError: () => {},
  signs: [SIGNS_DEFAULT_DATA],
  setSigns: () => {},
  pagination: PAGINATION_DEFAULT_DATA,
  setPagination: () => {},
  page: PAGINATION_DEFAULT_DATA.currentPage,
  setPage: () => {},
} as IContextProps);

export default SignsContext;