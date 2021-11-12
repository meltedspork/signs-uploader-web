import { Fragment, useContext, useEffect } from 'react';
import ResourceContext from '../../contexts/ResourceContext';
import { gql, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';

const CREATE_SIGN = gql`
mutation CreateSign(
  $signInput: SignInput,
) {
  createSign(
    signInput: $signInput,
  ) {
    uid
    videoUrls
    name
    pronounce
    definition
  }
}
`;

const CreateSign = ({ history }: any) => {
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

  const [createNewSign] = useMutation(CREATE_SIGN);

  useEffect(() => {
    setLoading(false);
    setError(false);
    setReadOnly(false);
  });

  const onClickCreateSign = async (e: any) => {
    e.preventDefault();
    const {
      videoFile,
      name,
      pronounce,
      definition,
    }: any = inputData;
    const { data } = await createNewSign({
      variables: {
        signInput: {
          videoFile,
          name,
          pronounce,
          definition,
        }
      },
    });
    const { createSign } = data;
    const { uid } = createSign;
    const createdSign = {
      name: createSign.name,
      pronounce: createSign.pronounce,
      definition: createSign.definition,
    }
    setUid(uid);
    setData(createdSign);
    setInputData(createdSign);
    history.replace({ pathname: `/sign/${uid}` });
  }

  const onClickClearSign = async (e: any) => {
    e.preventDefault();
    if (setReset) setReset(true);
  }

  return (
    <Fragment>
      <Button variant="primary" type="button" onClick={onClickCreateSign}>
        Submit
      </Button>{' '}
      <Button variant="danger" type="button" onClick={onClickClearSign}>
        Clear
      </Button>
    </Fragment>
  )
}

export default CreateSign;
