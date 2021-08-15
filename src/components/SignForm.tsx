import { useEffect, useState, useContext } from 'react';
import SignContext from '../contexts/SignContext';
import Form from 'react-bootstrap/Form';

const SignForm = ({ children }: any) => {
  const {
    signData,
    setSignData,
    readOnly,
  } = useContext(SignContext);
  console.log('signData', signData);
  const {
    videoFile = null,
    title = '',
    pronounce = '',
    definition = '',
  } = signData;

  const videoLabel = (signData.videoFile || { name: null }).name || 'Sign Video';

  const [localVideoFile, setLocalVideoFile] = useState(videoFile);
  const [localTitle, setLocalTitle] = useState(title);
  const [localPronounce, setLocalPronounce] = useState(pronounce);
  const [localDefinition, setLocalDefinition] = useState(definition);

  useEffect(() => {
    const updatedLocalState = Object.assign(
      signData,
      {
        videoFile: localVideoFile,
        title: localTitle,
        pronounce: localPronounce,
        definition: localDefinition,
      }
    );
    setSignData(updatedLocalState);
  }, [setSignData, signData, localVideoFile, localTitle, localPronounce, localDefinition]);

  return (
    <Form>
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