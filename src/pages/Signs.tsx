import { Fragment, useState } from 'react';
import ResourcesContext from '../contexts/ResourcesContext';
import GetSigns from '../components/graphql/GetSigns';
import ResourcesTable from '../components/ResourcesTable';
import PaginationUI from '../components/PaginationUI';

const SIGN_RESOURCE_NAME = 'sign';

const Signs = ({ history, match }: any) => {
  const {
    params: {
      page: currentPage = 1,
      size: currentSize = 15,
    }
  } = match;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    page: Number(currentPage),
    size: Number(currentSize),
    total: 0,
  });
  const [page, setPage] = useState(Number(currentPage));
  const [size, setSize] = useState(Number(currentSize));
  const [fetchMore, setFetchMore] = useState([]);

  const signsContextValues = {
    loading,
    setLoading,
    error,
    setError,
    data: (data as any),
    setData,
    pagination,
    setPagination,
    page,
    setPage,
    size,
    setSize,
    fetchMore: (fetchMore as any),
    setFetchMore,
  }

  return (
    <ResourcesContext.Provider value={signsContextValues}>
      <ResourcesContext.Consumer>
        {() => (
          <Fragment>
            <h1>Signs</h1>
            <PaginationUI history={history} name={SIGN_RESOURCE_NAME} />
            <GetSigns />
            <ResourcesTable history={history} name={SIGN_RESOURCE_NAME} />
          </Fragment>
        )}
      </ResourcesContext.Consumer>
    </ResourcesContext.Provider>
  )
}

export default Signs;
