import { useState } from 'react';
import SignProvider from '../providers/SignProvider';
import { gql, useMutation } from '@apollo/client';

const CREATE_SIGN = gql`
mutation createSign(
  $videoFile: Upload,
  $title: String!,
  $pronounce: String,
  $definition: String
) {
  createSign(
    videoFile: $videoFile,
    title: $title,
    pronounce: $pronounce,
    definition: $definition,
  ) {
    uid
    videoUrl
    title
    pronounce
    definition
    state
  }
}
`;

const CreateSign = ({ children }: any) => {
  const [createNewSign] = useMutation(CREATE_SIGN);

  const onClickCreateNewSign = async (e: any) => {
    e.preventDefault();
    // await createNewSign({
    //   variables: {
    //     videoFile,
    //     title,
    //     pronounce,
    //     definition,
    //   },
    // });
    // updateAddSignState({
    //   videoFile: null,
    //   title: '',
    //   pronounce: '',
    //   definition: '',
    // });
  }

  const [signData, setSignData] = useState({
    uid: '',
    videoFile: null,
    title: '',
    pronounce: '',
    definition: '',
  });
  const signContextValues = {
    signData,
    setSignData,
    readOnly: false,
  };

  return (
    <SignProvider values={signContextValues}>
      {children}
    </SignProvider>
  );
}

export default CreateSign;
