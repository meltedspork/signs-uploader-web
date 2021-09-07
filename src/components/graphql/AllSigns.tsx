import { Fragment, useEffect, useContext } from 'react';
import SignsContext from '../../contexts/SignsContext';
import { gql, useQuery } from '@apollo/client';

const ALL_SIGNS = gql`
  query AllSigns {
    allSigns {
      uid
      title
    }
  }
`;

const AllSigns = () => {
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
      const { allSigns } = data;
      setSigns(allSigns);
    }
  }, [setLoading, setError, setSigns, loading, error, data]);

  return <Fragment />;
};

export default AllSigns;
