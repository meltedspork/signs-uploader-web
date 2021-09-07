import { Fragment, useContext } from 'react';
import SignsContext from '../contexts/SignsContext';
import Table from 'react-bootstrap/Table';

const SignsTable = ({ history }: any) => {
  const {
    loading,
    error,
    signs,
  } = useContext(SignsContext);

  if (loading) return <Fragment>loading...</Fragment>;
  if (error) return <Fragment>Error: {JSON.stringify(error)}</Fragment>;

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {signs.map((sign: any, index: number) => (
          <tr key={index} onClick={() => { history.push(`/sign/${sign.uid}`) }}>
            <td>{sign.uid}</td>
            <td>{sign.title}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SignsTable;