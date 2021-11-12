import { useContext, useEffect, useState } from 'react';
import classNames from  'classnames';
import ResourceContext from '../contexts/ResourceContext';
import Textfield from './inputs/Textfield';
import Videofield from './inputs/Videofield';
import Videosfield from './inputs/Videosfield';
import Form from 'react-bootstrap/Form';

const SignForm = ({ children }: any) => {
  const {
    loading,
    error,
    data,
    setInputData,
    readOnly,
    reset,
    setReset,
  } = useContext(ResourceContext);

  const [inputVideoFile, setInputVideoFile] = useState(null);
  const [videoUrls, setVideoUrls] = useState([] as any);
  const [inputName, setInputName] = useState('');
  const [inputPronounce, setInputPronounce] = useState('');
  const [inputDefinition, setInputDefinition] = useState('');

  useEffect(() => {
    if (loading || error) return;

    if (readOnly) {
      setInputName(data.name);
      setInputPronounce(data.pronounce);
      setInputDefinition(data.definition);
      setVideoUrls(data.videoUrls);
    } else if (reset) {
      setInputVideoFile(null);
      setInputName('');
      setInputPronounce('');
      setInputDefinition('');
      setReset(false);
    }
    const updatedSignData = {
      videoFile: inputVideoFile,
      name: inputName,
      pronounce: inputPronounce,
      definition: inputDefinition,
    };
    setInputData(updatedSignData);
  }, [
    setReset, reset,
    loading,
    error,
    readOnly,
    data,
    setInputData,
    setInputVideoFile, inputVideoFile,
    setVideoUrls,
    setInputName, inputName,
    setInputPronounce, inputPronounce,
    setInputDefinition, inputDefinition,
  ]);

  return (
    <Form className={classNames({ loading: loading })}>
      <Textfield label="Name" value={inputName} onChange={setInputName} readOnly={readOnly} />
      <Textfield label="Pronounce" value={inputPronounce} onChange={setInputPronounce} readOnly={readOnly} />
      <Textfield label="Definition" value={inputDefinition} onChange={setInputDefinition} readOnly={readOnly} />
      <Videofield value={inputVideoFile} onChange={setInputVideoFile} readOnly={readOnly} />
      <Videosfield title={inputName} value={videoUrls} readOnly={readOnly} />
      {children}
    </Form>
  );
}

export default SignForm;