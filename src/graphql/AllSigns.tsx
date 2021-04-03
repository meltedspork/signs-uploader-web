import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';

const ALL_SIGNS = gql`
  query AllSigns {
    allSigns {
      uid
      title
    }
  }
`;

const AllSigns = () => {
  const { loading, error, data } = useQuery(ALL_SIGNS);

  console.log('loading:', loading);
  console.log('error:', error);
  console.log('data:', data);

  if (loading) return <Fragment>Loading...</Fragment>;
  if (error) return <Fragment>Error! {error.message}</Fragment>

  return (
    <Fragment>
      {data.allSigns.map((sign: any, index: number) => (
        <Fragment key={index}><br />Title: {sign.title}, Uid: {sign.uid}</Fragment>
      ))}
    </Fragment>
  );
};

export default AllSigns;