import { useEffect, useState, useContext } from 'react';
import classNames from  'classnames';
import SignContext from '../contexts/SignContext';
import Form from 'react-bootstrap/Form';

const SignForm = ({ children }: any) => {
  const {
    loading,
    error,
    signData,
    setInputSignData,
    readOnly,
  } = useContext(SignContext);

  const videoLabel = /*(signData.videoFile || { name: null }).name ||*/ 'Sign Video';

  const [localVideoFile, setLocalVideoFile] = useState(null);
  const [localTitle, setLocalTitle] = useState('');
  const [localPronounce, setLocalPronounce] = useState('');
  const [localDefinition, setLocalDefinition] = useState('');

  useEffect(() => {
    if (loading || error) return;

    if (readOnly) {
      setLocalTitle(signData.title);
      setLocalPronounce(signData.pronounce);
      setLocalDefinition(signData.definition);
    }
    const updatedSignData = {
      videoFile: localVideoFile,
      title: localTitle,
      pronounce: localPronounce,
      definition: localDefinition,
    };
    setInputSignData(updatedSignData);
  }, [
    loading,
    error,
    readOnly,
    signData,
    setInputSignData,
    setLocalVideoFile, localVideoFile,
    setLocalTitle, localTitle,
    setLocalPronounce, localPronounce,
    setLocalDefinition, localDefinition,
  ]);

  return (
    <Form className={classNames({ loading: loading })}>
      <Form.Group controlId="signTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control value={localTitle} plaintext={readOnly} readOnly={readOnly} onChange={(e: any) => setLocalTitle(e.target.value)} type="text" placeholder="Sign Title" />
      </Form.Group>

      <Form.Group controlId="signPronounce">
        <Form.Label>Pronounce</Form.Label>
        <Form.Control value={localPronounce} plaintext={readOnly} readOnly={readOnly} onChange={(e: any) => setLocalPronounce(e.target.value)} type="text" placeholder="Sign Pronounce" />
      </Form.Group>

      <Form.Group controlId="signDefinition">
        <Form.Label>Definition</Form.Label>
        <Form.Control value={localDefinition} plaintext={readOnly} readOnly={readOnly} onChange={(e: any) => setLocalDefinition(e.target.value)} type="text" placeholder="Sign Definition" />
      </Form.Group>

      {!readOnly &&
        <Form.File onChange={(e: any) => setLocalVideoFile(e.target.files[0])} label={videoLabel} data-browse="Upload" custom />
      }

      {children}
    </Form>
  );
}

export default SignForm;