import { useContext, useEffect, useState } from 'react';
import classNames from  'classnames';
import SignContext from '../contexts/SignContext';
import Textfield from './inputs/Textfield';
import Videofield from './inputs/Videofield';
import Form from 'react-bootstrap/Form';

const SignForm = ({ children }: any) => {
  const {
    loading,
    error,
    signData,
    setInputSignData,
    readOnly,
    reset,
    setReset,
  } = useContext(SignContext);

  const [inputVideoFile, setInputVideoFile] = useState(null);
  const [inputTitle, setInputTitle] = useState('');
  const [inputPronounce, setInputPronounce] = useState('');
  const [inputDefinition, setInputDefinition] = useState('');

  useEffect(() => {
    if (loading || error) return;

    if (readOnly) {
      setInputTitle(signData.title);
      setInputPronounce(signData.pronounce);
      setInputDefinition(signData.definition);
    } else if (reset) {
      setInputVideoFile(null);
      setInputTitle('');
      setInputPronounce('');
      setInputDefinition('');
      setReset(false);
    }
    const updatedSignData = {
      videoFile: inputVideoFile,
      title: inputTitle,
      pronounce: inputPronounce,
      definition: inputDefinition,
    };
    setInputSignData(updatedSignData);
  }, [
    setReset, reset,
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
      <Videofield value={inputVideoFile} onChange={setInputVideoFile} readOnly={readOnly} />
      {children}
    </Form>
  );
}

export default SignForm;