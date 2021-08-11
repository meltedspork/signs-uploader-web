import { Fragment, useState } from 'react';
import SignContext from '../contexts/SignContext';
// import { gql, useMutation } from '@apollo/client';

// const CREATE_SIGN = gql`
// mutation createSign(
//   $videoFile: Upload,
//   $title: String!,
//   $pronounce: String,
//   $definition: String
// ) {
//   createSign(
//     videoFile: $videoFile,
//     title: $title,
//     pronounce: $pronounce,
//     definition: $definition,
//   ) {
//     uid
//     videoUrl
//     title
//     pronounce
//     definition
//     state
//   }
// }
// `;

const CreateSign = ({ children }: any) => {
  // const [createNewSign] = useMutation(CREATE_SIGN);
  // const {
  //   videoFile,
  //   title,
  //   pronounce,
  //   definition,
  // } = state;

  // const onClickCreateNewSign = async (e: any) => {
  //   e.preventDefault();
  //   // await createNewSign({
  //   //   variables: {
  //   //     videoFile,
  //   //     title,
  //   //     pronounce,
  //   //     definition,
  //   //   },
  //   // });
  //   // updateAddSignState({
  //   //   videoFile: null,
  //   //   title: '',
  //   //   pronounce: '',
  //   //   definition: '',
  //   // });
  // }

  const [signData, setSignDataC] = useState({
    uid: '',
    videoFile: null,
    title: '',
    pronounce: '',
    definition: '',
  });
  // const signContextValues = {
  //   signData,
  //   setSignData: (foobar: any) => {
  //     console.log('setSignData: foobar', foobar);
  //     setSignDataC(foobar);
  //     console.log('setSignData: signData', signData);
  //   },
  //   readOnly: false,
  // };

  return (
    <SignContext.Provider value={{
      signData,
      setSignData: (foobar: any) => {
        console.log('setSignData: foobar', foobar);
        setSignDataC(foobar);
        console.log('setSignData: signData', signData);
      },
      readOnly: false,
    }}>
      <SignContext.Consumer>
        {(_context) => (
          <Fragment>
            {children}
          </Fragment>
        )}
      </SignContext.Consumer>
    </SignContext.Provider>
  );
}

export default CreateSign;
