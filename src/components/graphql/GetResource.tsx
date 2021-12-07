import { useEffect, useContext } from 'react';
import ResourceContext from '../../contexts/ResourceContext';
import { gql, useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import { capitalize } from '../../services/textService';

const GetResource = ({ query, resourceName }: any) => {
  const graphqlQuery = gql(query);
  const {
    uid,
    loaded,
    setLoaded,
    setLoading,
    setError,
    setData,
    setInputData,
    setReadOnly,
  } = useContext(ResourceContext);

  const { loading, error, data } = useQuery(graphqlQuery, {
    variables: { uid },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    setError(error);
    setLoading(loading);

    if (loaded) return;
  
    if (data) {
      const qraphqlQueryResp = `view${capitalize(resourceName)}`;
      const viewData = data[qraphqlQueryResp];
      setData(viewData);
      setInputData(viewData);
      setLoaded(true);
    }
  }, [
    resourceName,
    loaded, setLoaded,
    loading, error, uid, setLoading, setError, setData, setInputData, data]);

  const onClickEditResource = async (e: any) => {
    e.preventDefault();
    setReadOnly(false);
  }

  return (
    <Button variant="primary" type="button" onClick={onClickEditResource}>
      Edit
    </Button>
  );
}

export default GetResource;