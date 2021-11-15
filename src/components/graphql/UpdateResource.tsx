import { Fragment, useContext } from 'react';
import ResourceContext from '../../contexts/ResourceContext';
import { gql, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import { capitalize } from '../../services/textService';

const UpdateResource = ({
  resourceFields,
  resourceName,
  query,
}: any) => {
  const qraphqlQueryInput = `${resourceName}Input`;
  const qraphqlQueryResp = `update${capitalize(resourceName)}`;
  const graphqlQuery = gql(query);
  const {
    uid,
    data,
    setData,
    inputData,
    setInputData,
    setReadOnly,
  } = useContext(ResourceContext);

  const [updateResource] = useMutation(graphqlQuery);

  const onClickCancelResource = async (e: any) => {
    e.preventDefault();
    setData(data);
    setReadOnly(true);
  }

  const onClickUpdateResource = async (e: any) => {
    e.preventDefault();
    let variables: any = {
      uid,
      [qraphqlQueryInput]: {},
    };
    resourceFields.forEach((field: string) => {
      variables[qraphqlQueryInput][field] = inputData[field];
    });
    const { data } = await updateResource({ variables });
    const updateData = data[qraphqlQueryResp];
    let updatedData: any = {};
    resourceFields.forEach((field: string) => {
      updatedData[field] = updateData[field];
    });
    setInputData(updatedData);
    setData(updatedData);
    setReadOnly(true);
  }

  return (
    <Fragment>
      <Button variant="secondary" type="button" onClick={onClickUpdateResource}>
        Update
      </Button>{' '}
      <Button variant="danger" type="button" onClick={onClickCancelResource}>
        Cancel
      </Button>
    </Fragment>
  );
}

export default UpdateResource;
