import { Fragment, useContext, useEffect } from 'react';
import ResourceContext from '../../contexts/ResourceContext';
import { gql, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import { capitalize } from '../../services/textService';

const CreateResource = ({
  history,
  resourceName,
  query,
}: any) => {
  const qraphqlQueryInput = `${resourceName}Input`;
  const qraphqlQueryResp = `create${capitalize(resourceName)}`;
  const graphqlQuery = gql(query);
  const {
    setUid,
    setLoading,
    setError,
    setData,
    inputData,
    setInputData,
    setReadOnly,
    setReset,
  } = useContext(ResourceContext);

  const [createNewResource] = useMutation(graphqlQuery);

  useEffect(() => {
    setLoading(false);
    setError(false);
    setReadOnly(false);
  });

  const onClickCreateResource = async (e: any) => {
    e.preventDefault();
    const variables: any = {
      [qraphqlQueryInput]: inputData,
    };
    const { data } = await createNewResource({ variables });
    const createdData = data[qraphqlQueryResp];
    const { uid } = createdData;
    setUid(uid);
    setData(createdData);
    setInputData(createdData);
    history.replace({ pathname: `/${resourceName}/${uid}` });
  }

  const onClickClearResource = async (e: any) => {
    e.preventDefault();
    if (setReset) setReset(true);
  }

  return (
    <Fragment>
      <Button variant="primary" type="button" onClick={onClickCreateResource}>
        Submit
      </Button>{' '}
      <Button variant="danger" type="button" onClick={onClickClearResource}>
        Clear
      </Button>
    </Fragment>
  )
}

export default CreateResource;
