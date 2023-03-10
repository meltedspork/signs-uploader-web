import { createContext } from 'react';

interface IDataKeys {
  [key: string]: string | any;
}

interface IDataProps extends IDataKeys {
  uid: string,
  name: string,
}

interface IPaginationDataProps extends IDataKeys {
  page: number,
  size: number,
  total: number,
}

interface IContextProps {
  data: [IDataProps],
  setData: Function,
  loading: boolean,
  setLoading: Function,
  error: any,
  setError: Function,
  usePagination: boolean,
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
  data: [{
    uid: '',
    name: '',
  }],
  setData: () => null,
  loading: true,
  setLoading: () => null,
  error: null,
  setError: () => null,
  usePagination: true,
  pagination: {
    page: 1,
    size: 0,
    total: 0,
  },
  setPagination: () => null,
  page: 1,
  setPage: () => null,
  size: 0,
  setSize: () => null,
  fetchMore: [() => null],
  setFetchMore: () => null,
} as IContextProps);

export default ResourcesContext;