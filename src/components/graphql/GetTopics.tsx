import { Fragment, useEffect, useContext } from 'react';
import ResourcesContext from '../../contexts/ResourcesContext';
import { gql, useQuery } from '@apollo/client';

const ALL_TOPICS = gql`
  query ViewTopics(
    $page: Int,
    $size: Int
  ) {
    viewTopics(
      page: $page,
      size: $size,
    ) {
      uid
      name
    }
  }
`;

const GetTopics = () => {
  const {
    setLoading,
    setError,
    setData,
    setPagination,
    page,
    setPage,
    size,
    setSize,
    setFetchMore,
  } = useContext(ResourcesContext);

  const {
    loading,
    error,
    data,
    fetchMore,
  } = useQuery(ALL_TOPICS, {
    variables: { page, size },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    setLoading(loading);
    setError(error);

    if (data) {
      const {
        pagination,
        viewTopics,
      } = data;
      setData(viewTopics);
      setPagination(pagination);
      setPage(pagination.page);
      setSize(pagination.size);
      if (fetchMore) {
        setFetchMore([fetchMore]);
      }
    }
  }, [
    loading, setLoading,
    error, setError,
    data,
    fetchMore, setFetchMore,
    setData, setPagination, setPage, setSize,
  ]);

  return <Fragment />;
};

export default GetTopics;
