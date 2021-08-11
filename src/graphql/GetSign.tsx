import { Fragment } from 'react';
import SignContext from '../contexts/SignContext';
import { gql, useQuery } from '@apollo/client';

const GET_SIGN = gql`
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

const GetSign = ({ children, uid }: any) => {
  const { loading, error, data } = useQuery(GET_SIGN, {
    variables: { uid },
  });

  if (loading) return <Fragment>Loading...</Fragment>;
  if (error) return <Fragment>Error! {error.message}</Fragment>

  const {
    viewSign: {
      videoFile,
      title,
      pronounce,
      definition,
    } 
  } = data;
  const signData = {
    uid,
    videoFile,
    title,
    pronounce,
    definition,
  }

  console.log('ViewSign: signData --->>>> ', signData);

  const signContextValues = {
    signData,
    setSignData: () => {},
    readOnly: true,
  }

  return (
    <SignContext.Provider value={signContextValues}>
      <SignContext.Consumer>
        {(context) => (
          <Fragment>
            {children}
          </Fragment>
        )}
      </SignContext.Consumer>
    </SignContext.Provider>
  );
}

export default GetSign;