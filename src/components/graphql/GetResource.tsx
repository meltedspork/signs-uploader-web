import { useEffect, useContext } from 'react';
import ResourceContext from '../../contexts/ResourceContext';
import { gql, useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import { capitalize } from '../../services/textService';

const GetResource = ({ resourceName, query, resourceFields }: any) => {
  const graphqlQuery = gql(query);
  const qraphqlQueryResp = `view${capitalize(resourceName)}`;
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
      const viewData = data[qraphqlQueryResp];
      let useData: any = {};
      resourceFields.forEach((field: string) => {
        useData[field] = viewData[field];
      });
      setData(useData);
      setInputData(useData);
      setLoaded(true);
    }
  }, [
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