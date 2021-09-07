import { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const [allSigns, setAllSigns] = useState([]);
  const {
    loading,
    error,
    data,
  } = useQuery(ALL_SIGNS);

  useEffect(() => {
    // setLoading(loading);
    // setError(error);

    if (data) {
      const { allSigns } = data;
      setAllSigns(allSigns);
    }
  }, [data]);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>uid</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {allSigns.map((sign: any, index: number) => (
          <tr key={index} onClick={() => { history.push(`/view-sign/${sign.uid}`) }}>
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
