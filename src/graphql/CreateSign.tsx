import Button from 'react-bootstrap/Button';
import { gql, useMutation } from '@apollo/client';

const CREATE_SIGN = gql`
mutation createSign(
  $videoFile: Upload!
) {
  createSign(
    videoFile: $videoFile
  ) {
    uid
  }
}
`;

// const CREATE_SIGN = gql`
// mutation createSign(
//   $videoFile: Upload!,
//   $title: String!,
//   $pronounce: String!,
//   $definition: String!
// ) {
//   createSign(
//     videoFile: $videoFile,
//     title: $title,
//     pronounce: $pronounce,
//     definition: $definition
//   ) {
//     uid
//     title
//     pronounce
//     definition
//     state
//   }
// }
// `;

const CreateSign = ({ state, updateAddSignState }: any) => {
  const [createNewSign] = useMutation(CREATE_SIGN);
  const {
    videoFile,
    title,
    pronounce,
    definition,
  } = state;

  const onClickCreateNewSign = async (e: any) => {
    e.preventDefault();
    await createNewSign({
      variables: {
        videoFile,
        // title,
        // pronounce,
        // definition,
      },
      // context: {
      //   useMultipart: true,
      // },
    });
    updateAddSignState({
      videoFile: null,
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
