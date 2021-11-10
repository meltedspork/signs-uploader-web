import { Fragment, useEffect, useContext } from 'react';
import SignsContext from '../../contexts/SignsContext';
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
      title
    }
  }
`;

const GetSigns = () => {
  const {
    setLoading,
    setError,
    setSigns,
    setPagination,
    page,
    setPage,
    size,
    setSize,
    setFetchMore,
  } = useContext(SignsContext);

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
      setSigns(viewSigns);
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
    setSigns, setPagination, setPage, setSize,
  ]);

  return <Fragment />;
};

export default GetSigns;
