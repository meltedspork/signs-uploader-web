import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignForm = (props: any) => {
  const [title, setTitle] = useState();
  const [pronounce, setPronounce] = useState();
  const [definition, setDefinition] = useState();

  const onClickHandler = (e: any) => {
    //addChoreLog([choreDesc, name, date])
    e.preventDefault();
  }

  return (
    <Form>
      <Form.Group controlId="signTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control value={title} onChange={(e: any) => setTitle(e.target.value)} type="text" placeholder="Sign Title" />
      </Form.Group>

      <Form.Group controlId="signPronounce">
        <Form.Label>Pronounce</Form.Label>
        <Form.Control value={pronounce} onChange={(e: any) => setPronounce(e.target.value)} type="text" placeholder="Sign Pronounce" />
      </Form.Group>

      <Form.Group controlId="signDefinition">
        <Form.Label>Definition</Form.Label>
        <Form.Control value={definition} onChange={(e: any) => setDefinition(e.target.value)}  type="text" placeholder="Sign Definition" />
      </Form.Group>

      <Button variant="primary" type="button" onClick={onClickHandler}>
        Submit
      </Button>
    </Form>
  );
}

export default SignForm;