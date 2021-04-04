import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

const SignForm = ({ children, state, updateAddSignState }: any) => {
  const {
    title,
    pronounce,
    definition,
  } = state;
  const [localTitle, setTitle] = useState('');
  const [localPronounce, setPronounce] = useState('');
  const [localDefinition, setDefinition] = useState('');

  useEffect(() => {
    updateAddSignState({
      title: localTitle,
      pronounce: localPronounce,
      definition: localDefinition,
    });
  }, [updateAddSignState, localTitle, localPronounce, localDefinition]);

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

      {children}
    </Form>
  );
}

export default SignForm;