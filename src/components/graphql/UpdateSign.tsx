import { Fragment, useContext } from 'react';
import ResourceContext from '../../contexts/ResourceContext';
import { gql, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';

const UPDATE_SIGN = gql`
mutation UpdateSign(
  $uid: UUID!,
  $signInput: SignInput,
) {
  updateSign(
    uid: $uid,
    signInput: $signInput,
  ) {
    videoUrls
    name
    pronounce
    definition
  }
}
`;

const UpdateSign = () => {
  const {
    uid,
    data,
    setData,
    inputData,
    setInputData,
    setReadOnly,
  } = useContext(ResourceContext);

  const [updateSign] = useMutation(UPDATE_SIGN);

  const onClickCancelSign = async (e: any) => {
    e.preventDefault();
    setData(data);
    setReadOnly(true);
  }

  const onClickUpdateSign = async (e: any) => {
    e.preventDefault();
    const {
      name,
      pronounce,
      definition,
    }: any = inputData;
    const { data } = await updateSign({
      variables: {
        uid,
        signInput: {
          name,
          pronounce,
          definition,
        }
      },
    });
    const { updateSign: updatedSign } = data;
    const updatedSignData: any = {
      videoUrls: updatedSign.videoUrls,
      name: updatedSign.name,
      pronounce: updatedSign.pronounce,
      definition: updatedSign.definition,
    }

    setInputData(updatedSignData);
    setData(updatedSignData);
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