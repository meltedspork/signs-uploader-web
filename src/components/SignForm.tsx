import { useEffect, useState, useContext } from 'react';
import classNames from  'classnames';
import SignContext from '../contexts/SignContext';
import Textfield from './inputs/Textfield';
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

  const [inputVideoFile, setInputVideoFile] = useState(null);
  const [inputVideoUrl, setInputVideoUrl] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputPronounce, setInputPronounce] = useState('');
  const [inputDefinition, setInputDefinition] = useState('');

  useEffect(() => {
    if (loading || error) return;

    if (readOnly) {
      setInputTitle(signData.title);
      setInputPronounce(signData.pronounce);
      setInputDefinition(signData.definition);
    }
    const updatedSignData = {
      videoFile: inputVideoFile,
      title: inputTitle,
      pronounce: inputPronounce,
      definition: inputDefinition,
    };
    setInputSignData(updatedSignData);
  }, [
    loading,
    error,
    readOnly,
    signData,
    setInputSignData,
    setInputVideoFile, inputVideoFile,
    setInputTitle, inputTitle,
    setInputPronounce, inputPronounce,
    setInputDefinition, inputDefinition,
  ]);

  return (
    <Form className={classNames({ loading: loading })}>
      <Textfield label="Title" value={inputTitle} onChange={setInputTitle} readOnly={readOnly} />
      <Textfield label="Pronounce" value={inputPronounce} onChange={setInputPronounce} readOnly={readOnly} />
      <Textfield label="Definition" value={inputDefinition} onChange={setInputDefinition} readOnly={readOnly} />

      {!readOnly ?
        <Form.File onChange={(e: any) => setInputVideoFile(e.target.files[0])} label={videoLabel} data-browse="Upload" custom />
      : !!inputVideoUrl && <img src={inputVideoUrl} alt="loading..." />}

      {children}
    </Form>
  );
}

export default SignForm;