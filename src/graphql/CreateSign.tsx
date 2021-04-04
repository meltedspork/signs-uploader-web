import Button from 'react-bootstrap/Button';
import { gql, useMutation } from '@apollo/client';

const CREATE_SIGN = gql`
mutation CreateSign(
  $title: String!,
  $pronounce: String!,
  $definition: String!
) {
  createSign(
    title: $title,
    pronounce: $pronounce,
    definition: $definition
  ) {
    uid
    title
    pronounce
    definition
    state
  }
}
`;

const CreateSign = ({ state, updateAddSignState }: any) => {
  const [createNewSign] = useMutation(CREATE_SIGN);
  const {
    title,
    pronounce,
    definition,
  } = state;

  const onClickCreateNewSign = (e: any) => {
    e.preventDefault();
    createNewSign({
      variables: {
        title,
        pronounce,
        definition,
      },
    });
    updateAddSignState({
      title: '',
      pronounce: '',
      definition: '',
    });
  }

  return (
    <Button variant="primary" type="button" onClick={onClickCreateNewSign}>
      Submit
    </Button>
  );
}

export default CreateSign;
