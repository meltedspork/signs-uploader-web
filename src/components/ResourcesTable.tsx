import { Fragment, useContext } from 'react';
import ResourcesContext from '../contexts/ResourcesContext';
import Table from 'react-bootstrap/Table';
// import InfiniteScroll from 'react-infinite-scroller';

const ResourcesTable = ({
  resourcePath,
  history,
}: any) => {
  const {
    loading,
    error,
    data,
  } = useContext(ResourcesContext);

  const loadMore = (e: any) => {
    console.log('eeee:', e)
  }

  if (loading) return <Fragment>loading...</Fragment>;
  if (error) return <Fragment>Error: {JSON.stringify(error)}</Fragment>;

  return (
    <div style={{height:'700px', overflow:'auto'}}>
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
    </div>
  );
  // return (
  //   <div style={{height:'700px', overflow:'auto'}}>
  //             <InfiniteScroll
  //           pageStart={0}
  //           loadMore={loadMore}
  //           hasMore={true}
  //           loader={<div className="loader" key={0}>Loading ...</div>}
  //           useWindow={false}
  //       >
  //     <Table striped bordered hover size="sm">
  //       <thead>
  //         <tr>
  //           <th>ID</th>
  //           <th>Name</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //       {data.map((d: any, index: number) => (
  //           <tr key={index} onClick={() => { history.push(`/${resourcePath}/${d.uid}`) }}>
  //             <td>{d.uid}</td>
  //             <td>{d.name}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </Table>
  //    </InfiniteScroll>
  //   </div>
  // );
};

export default ResourcesTable;
