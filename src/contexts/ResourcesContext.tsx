import { createContext } from 'react';

const EMPTY_FUNCTION = () => {};
const DEFAULT_DATA = {
  uid: '',
  name: '',
};
const PAGINATION_DEFAULT_DATA = {
  page: 1,
  size: 0,
  total: 0,
};

interface IDataKeys {
  [key: string]: string | any;
}

interface IDataProps extends IDataKeys {
  uid: string,
  name: string,
};

interface IPaginationDataProps extends IDataKeys {
  page: number,
  size: number,
  total: number,
};

interface IContextProps {
  data: [IDataProps],
  setData: Function,
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

const ResourcesContext = createContext({
  loading: true,
  setLoading: EMPTY_FUNCTION,
  error: null,
  setError: EMPTY_FUNCTION,
  data: [DEFAULT_DATA],
  setData: EMPTY_FUNCTION,
  pagination: PAGINATION_DEFAULT_DATA,
  setPagination: EMPTY_FUNCTION,
  page: PAGINATION_DEFAULT_DATA.page,
  setPage: EMPTY_FUNCTION,
  size: PAGINATION_DEFAULT_DATA.size,
  setSize: EMPTY_FUNCTION,
  fetchMore: [EMPTY_FUNCTION],
  setFetchMore: EMPTY_FUNCTION,
} as IContextProps);

export default ResourcesContext;