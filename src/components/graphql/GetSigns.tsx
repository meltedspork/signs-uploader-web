import { Fragment, useEffect, useContext } from 'react';
import ResourcesContext from '../../contexts/ResourcesContext';
import { gql, useQuery } from '@apollo/client';

const ALL_SIGNS = gql`
  query ViewSigns(
    $page: Int,
    $size: Int
  ) {
    viewSigns(
      page: $page,
      size: $size,
    ) {
      uid
      name
    }
  }
`;

const GetSigns = () => {
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
  } = useQuery(ALL_SIGNS, {
    variables: { page, size },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    setLoading(loading);
    setError(error);

    if (data) {
      const {
        pagination,
        viewSigns,
      } = data;
      setData(viewSigns);
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

export default GetSigns;
