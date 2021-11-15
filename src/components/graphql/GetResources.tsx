import { Fragment, useEffect, useContext } from 'react';
import ResourcesContext from '../../contexts/ResourcesContext';
import { gql, useQuery } from '@apollo/client';
import { capitalize } from '../../services/textService';

const GetResources = ({ resourceNames, query }: any) => {
  const viewResp = `view${capitalize(resourceNames)}`;
  const graphqlQuery = gql(query);
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
  } = useQuery(graphqlQuery, {
    variables: { page, size },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    setLoading(loading);
    setError(error);

    if (data) {
      const { pagination } = data;
      const viewData = data[viewResp];
      setData(viewData);
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
    setData,
    setPagination,
    setPage,
    setSize,
  ]);

  return <Fragment />;
};

export default GetResources;
