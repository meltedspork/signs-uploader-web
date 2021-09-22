import { Fragment, useEffect, useContext } from 'react';
import SignsContext from '../../contexts/SignsContext';
import { gql, useQuery } from '@apollo/client';

const ALL_SIGNS = gql`
  query signs {
    signs {
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
  } = useContext(SignsContext);

  const {
    loading,
    error,
    data,
  } = useQuery(ALL_SIGNS);

  useEffect(() => {
    setLoading(loading);
    setError(error);
  
    if (data) {
      setSigns(data.signs);
    }
  }, [setLoading, setError, setSigns, loading, error, data]);

  return <Fragment />;
};

export default GetSigns;
