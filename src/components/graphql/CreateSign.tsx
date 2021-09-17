import { Fragment, useContext, useEffect } from 'react';
import SignContext from '../../contexts/SignContext';
import { gql, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';

declare global {
  interface Window { signForm: any; }
}

const CREATE_SIGN = gql`
mutation createSign(
  $signInput: SignInput,
) {
  createSign(
    signInput: $signInput,
  ) {
    uid
    videoUrls
    title
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
    setSignData,
    inputSignData,
    setInputSignData,
    setReadOnly,
    setReset,
  } = useContext(SignContext);

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
      title,
      pronounce,
      definition,
    }: any = inputSignData;
    const { data } = await createNewSign({
      variables: {
        signInput: {
          videoFile,
          title,
          pronounce,
          definition,
        }
      },
    });
    const { createSign } = data;
    const { uid } = createSign;
    const createdSign = {
      title: createSign.title,
      pronounce: createSign.pronounce,
      definition: createSign.definition,
    }
    setUid(uid);
    setSignData(createdSign);
    setInputSignData(createdSign);
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
