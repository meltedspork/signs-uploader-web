import { Fragment, useEffect, useState } from 'react';
// import GetSign from '../../graphql/GetSign';
// import SignProvider from '../../providers/SignProvider';
import SignContext from '../../contexts/SignContext';
import { gql, useQuery, useMutation } from '@apollo/client';

import SignForm from '../../components/SignForm';
import Button from 'react-bootstrap/Button';

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

// const UPDATE_SIGN = gql`
// mutation updateSign(
//   $uid: String!
//   $videoFile: Upload,
//   $title: String!,
//   $pronounce: String,
//   $definition: String
// ) {
//   updateSign(
//     uid: $uid,
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

// const UPDATE_SIGN = gql`
// mutation updateSign(
//   $uid: String!
//   $title: String!,
//   $pronounce: String,
//   $definition: String
// ) {
//   updateSign(
//     uid: $uid,
//     title: $title,
//     pronounce: $pronounce,
//     definition: $definition,
//   ) {
//     uid
//     title
//     pronounce
//     definition
//     state
//   }
// }
// `;

const ViewSign = (props: any) => {
  console.log('ViewSign: props', props);
  const { uid } = props.match.params;

  const { loading, error, data } = useQuery(GET_SIGN, {
    variables: { uid },
  });
  // const [updateSign] = useMutation(UPDATE_SIGN);

  const [signData, setSignData] = useState(null);
  const [readOnly, setReadOnly] = useState(true);

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
  const initSignData = {
    uid,
    videoFile,
    title,
    pronounce,
    definition,
  }

  console.log('ViewSign: signData --->>>> ', signData);

  const onClickEditSign = async (e: any) => {
    e.preventDefault();
    setReadOnly(false);
  }

  const onClickCancelEditSign = async (e: any) => {
    e.preventDefault();
    setReadOnly(true);
  }

  const onClickUpdateSign = async (e: any) => {
    e.preventDefault();
    // const updatedSign = await updateSign({
    //   variables: signData,
    // });
    // console.log('updatedSign', updatedSign);
  }

  const signContextValues = {
    signData: signData || initSignData,
    setSignData,
    readOnly,
  }

  return (
    <SignContext.Provider value={signContextValues}>
      <SignContext.Consumer>
        {(context) => (
          <SignForm>
            {readOnly
              ? <Button variant="primary" type="button" onClick={onClickEditSign}>
                Edit
              </Button>
              : <Fragment>
                <Button variant="secondary" type="button" onClick={onClickUpdateSign}>
                  Update
                </Button>{' '}
                <Button variant="danger" type="button" onClick={onClickCancelEditSign}>
                  Cancel
                </Button>
              </Fragment>
            }
          </SignForm>
        )}
      </SignContext.Consumer>
    </SignContext.Provider>
  )
}

export default ViewSign;