import { Fragment, useEffect, useContext } from 'react';
import SignsContext from '../../contexts/SignsContext';
import { gql, useQuery } from '@apollo/client';

const ALL_SIGNS = gql`
  query ViewSigns(
    $page: Int!,
  ) {
    viewSigns(
      page: $page,
    ) {
      pagination {
        currentPage
        limit
        total
      }
      signs {
        uid
        title
      }
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
  } = useContext(SignsContext);

  const {
    loading,
    error,
    data,
  } = useQuery(ALL_SIGNS, {
    variables: { page: Number(page) },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    setLoading(loading);
    setError(error);

    if (data) {
      const {
        viewSigns: {
          pagination,
          signs,
        }
      } = data;
      setSigns(signs);
      setPagination(pagination);
      setPage(pagination.currentPage);
    }
  }, [
    loading, setLoading,
    error, setError,
    data, setSigns, setPagination, setPage,
  ]);

  return <Fragment />;
};

export default GetSigns;
