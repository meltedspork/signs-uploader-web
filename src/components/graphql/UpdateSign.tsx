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
    setReadOnly,
  } = useContext(SignContext);

  const [updateSign] = useMutation(UPDATE_SIGN);

  const onClickCancelSign = async (e: any) => {
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

  return (
    <Fragment>
      <Button variant="secondary" type="button" onClick={onClickUpdateSign}>
        Update
      </Button>{' '}
      <Button variant="danger" type="button" onClick={onClickCancelSign}>
        Cancel
      </Button>
    </Fragment>
  );
}

export default UpdateSign;