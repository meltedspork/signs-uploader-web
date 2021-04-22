import { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import Table from 'react-bootstrap/Table';

const ALL_SIGNS = gql`
  query AllSigns {
    allSigns {
      uid
      title
    }
  }
`;

const _getAllSigns = () => {
  const { loading, error, data } = useQuery(ALL_SIGNS);

  if (loading) return <Fragment>Loading...</Fragment>;
  if (error) return <Fragment>Error! {error.message}</Fragment>

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>uid</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {data.allSigns.map((sign: any, index: number) => (
          <tr key={index}>
            <td>{sign.uid}</td>
            <td>{sign.title}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const AllSigns = () => {
  return (
    <Fragment>
      <h1>Signs</h1>
      {_getAllSigns()}
    </Fragment>
  );
}

export default AllSigns;
