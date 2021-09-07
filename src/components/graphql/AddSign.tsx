import { Fragment, useContext, useEffect } from 'react';
import SignContext from '../../contexts/SignContext';
import { gql, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';

const CREATE_SIGN = gql`
mutation createSign(
  $signInput: SignInput,
) {
  createSign(
    signInput: $signInput,
  ) {
    uid
    videoUrl
    title
    pronounce
    definition
  }
}
`;

const AddSign = ({ history }: any) => {
  const {
    setUid,
    setLoading,
    setError,
    setSignData,
    inputSignData,
    setInputSignData,
    setReadOnly,
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
    setReadOnly(true);
    history.replace({ pathname: `/sign/${uid}` });
  }

  return (
    <Fragment>
      <br />
      <br />
      <Button variant="primary" type="button" onClick={onClickCreateSign}>
        Submit
      </Button>
    </Fragment>
  )
}

export default AddSign;
