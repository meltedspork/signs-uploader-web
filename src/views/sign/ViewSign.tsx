import { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import Card from 'react-bootstrap/Card';

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

const _getSign = (uid: string) => {
  console.log('uid ------>', uid);
  const { loading, error, data } = useQuery(GET_SIGN, {
    variables: { uid },
  });

  if (loading) return <Fragment>Loading...</Fragment>;
  if (error) return <Fragment>Error! {error.message}</Fragment>

  const { viewSign } = data;

  return (
    <Card>
      <Card.Img variant="top" src={viewSign.videoUrl} />
      <Card.Body>
        <Card.Title>{viewSign.title} - {viewSign.pronounce}</Card.Title>
        <Card.Text>{viewSign.definition}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const ViewSign = ({ match }: any) => {
  const { uid } = match.params

  return (
    <Fragment>
      <h1>View Sign</h1>
      {_getSign(uid)}
    </Fragment>
  );
}

export default ViewSign;