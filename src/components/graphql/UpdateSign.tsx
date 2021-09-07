import { Fragment, useContext } from 'react';
import SignContext from '../../contexts/SignContext';
import { gql, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';

const UPDATE_SIGN = gql`
mutation updateSign(
  $uid: UUID!,
  $signInput: SignInput,
) {
  updateSign(
    uid: $uid,
    signInput: $signInput,
  ) {
    videoUrl
    title
    pronounce
    definition
  }
}
`;

const UpdateSign = () => {
  const {
    uid,
    signData,
    setSignData,
    inputSignData,
    setInputSignData,
    readOnly,
    setReadOnly,
  } = useContext(SignContext);

  const [updateSign] = useMutation(UPDATE_SIGN);

  const onClickCancelEditSign = async (e: any) => {
    e.preventDefault();
    setSignData(signData);
    setReadOnly(true);
  }

  const onClickUpdateSign = async (e: any) => {
    e.preventDefault();
    const {
      title,
      pronounce,
      definition,
    }: any = inputSignData;
    const { data } = await updateSign({
      variables: {
        uid,
        signInput: {
          title,
          pronounce,
          definition,
        }
      },
    });
    const { updateSign: updatedSign } = data;
    const updatedSignData: any = {
      videoFile: updatedSign.videoFile,
      title: updatedSign.title,
      pronounce: updatedSign.pronounce,
      definition: updatedSign.definition,
    }
    setInputSignData(updatedSignData);
    setSignData(updatedSignData);
    setReadOnly(true);
  }

  const onClickEditSign = async (e: any) => {
    e.preventDefault();
    setReadOnly(false);
  }

  if (readOnly) {
    return (
      <Button variant="primary" type="button" onClick={onClickEditSign}>
        Edit
      </Button>
    );
  }

  return (
    <Fragment>
      <br /><br />
      <Button variant="secondary" type="button" onClick={onClickUpdateSign}>
        Update
      </Button>{' '}
      <Button variant="danger" type="button" onClick={onClickCancelEditSign}>
        Cancel
      </Button>
    </Fragment>
  );
}

export default UpdateSign;