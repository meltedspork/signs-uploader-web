import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import AllSigns from '../../graphql/AllSigns';


const Signs = () => {
  return (
    <Fragment>
      <h1>Signs</h1>
      <Button variant="primary">All Signs</Button>
      <AllSigns />
    </Fragment>
  );
};

export default Signs;