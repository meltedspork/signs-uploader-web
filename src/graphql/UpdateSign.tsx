import SignProvider from '../providers/SignProvider';
import { gql, useQuery } from '@apollo/client';

const UPDATE_SIGN = gql`
  query ViewSign (
    $uid: UUID!
  ) {
    viewSign(
      uid: $uid
    ) {
      title
      pronounce
      definition
      state
      videoUrl
    }
  }
`;

const UpdateSign = ({ children, signData }: any) => {
  // const {
  //   videoFile,
  //   title,
  //   pronounce,
  //   definition,
  // } = signData;

  console.log('ViewSign: signData --->>>> ', signData);

  const signContextValues = {
    signData,
    setSignData: () => {},
    readOnly: false,
  }

  return (
    <SignProvider values={signContextValues}>
      {children}
    </SignProvider>
  );
}

export default UpdateSign;