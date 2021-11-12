import { Fragment, useState } from 'react';
import SignsContext from '../contexts/ResourcesContext';
import GetTopics from '../components/graphql/GetTopics';
import ResourcesTable from '../components/ResourcesTable';
import PaginationUI from '../components/PaginationUI';

const TOPIC_RESOURCE_NAME = 'topic';

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

  const topicContextValues = {
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
    <SignsContext.Provider value={topicContextValues}>
      <SignsContext.Consumer>
        {() => (
          <Fragment>
            <h1>Topics</h1>
            <PaginationUI history={history} name={TOPIC_RESOURCE_NAME} />
            <GetTopics />
            <ResourcesTable history={history} name={TOPIC_RESOURCE_NAME} />
          </Fragment>
        )}
      </SignsContext.Consumer>
    </SignsContext.Provider>
  )
}

export default Signs;
