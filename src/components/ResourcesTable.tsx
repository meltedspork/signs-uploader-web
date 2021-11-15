import { Fragment, useContext } from 'react';
import ResourcesContext from '../contexts/ResourcesContext';
import Table from 'react-bootstrap/Table';

const ResourcesTable = ({
  resourcePath,
  history,
}: any) => {
  const {
    loading,
    error,
    data,
  } = useContext(ResourcesContext);

  if (loading) return <Fragment>loading...</Fragment>;
  if (error) return <Fragment>Error: {JSON.stringify(error)}</Fragment>;

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d: any, index: number) => (
          <tr key={index} onClick={() => { history.push(`/${resourcePath}/${d.uid}`) }}>
            <td>{d.uid}</td>
            <td>{d.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ResourcesTable;