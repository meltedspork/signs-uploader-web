import { useContext, useEffect, useState } from 'react';
import classNames from  'classnames';
import ResourceContext from '../contexts/ResourceContext';
import Textfield from './inputs/Textfield';
import Selectfield from './inputs/Selectfield';
import VideoFields from './Videofields';
import VideoGrid from './VideoGrid';
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

  const [resetReadOnly, setResetReadOnly] = useState(readOnly);
  const [inputVideoFiles, setInputVideoFiles] = useState(null);
  const [videoUrls, setVideoUrls] = useState([] as any);
  const [inputName, setInputName] = useState('');
  const [inputPronounce, setInputPronounce] = useState('');
  const [inputDefinition, setInputDefinition] = useState('');
  const [inputTopics, setInputTopics] = useState([] as any);
  const [optTopics, setOptTopics] = useState([] as any);

  useEffect(() => {
    if (loading || error) return;

    console.log('---->', data);

    if (data && data.topics) {
      setOptTopics(data.topics);
    }

    if (readOnly && resetReadOnly) {
      const {
        sign: {
          name = '',
          pronounce = '',
          definition = '',
          videoUrls = [],
          topics = [],
        },
      } = data;

      setInputName(name);
      setInputPronounce(pronounce);
      setInputDefinition(definition);
      setVideoUrls(videoUrls);
      setInputTopics(topics);
      setResetReadOnly(false);
    } else if (reset) {
      setInputVideoFiles(null);
      setInputName('');
      setInputPronounce('');
      setInputDefinition('');
      setInputTopics([]);
      setReset(false);
    }

    const updatedSignData = {
      videoFile: inputVideoFiles,
      name: inputName,
      pronounce: inputPronounce,
      definition: inputDefinition,
      topics: inputTopics.map(({ uid }: any) => uid),
    };
    setInputData(updatedSignData);
  }, [
    setResetReadOnly, resetReadOnly,
    setReset, reset,
    loading,
    error,
    readOnly,
    data,
    setInputData,
    setInputVideoFiles, inputVideoFiles,
    setVideoUrls,
    setInputName, inputName,
    setInputPronounce, inputPronounce,
    setInputDefinition, inputDefinition,
    setInputTopics, inputTopics, setOptTopics,
  ]);

  return (
    <Form className={classNames({ loading })}>
      <Textfield label="Name" value={inputName} onChange={setInputName} readOnly={readOnly} />
      <Textfield label="Pronounce" value={inputPronounce} onChange={setInputPronounce} readOnly={readOnly} />
      <Textfield label="Definition" value={inputDefinition} onChange={setInputDefinition} readOnly={readOnly} />
      <Selectfield label="Topics" value={inputTopics} options={optTopics} onChange={setInputTopics} readOnly={readOnly} />
      <VideoFields data={videoUrls} readOnly={readOnly} />
      <VideoGrid title={inputName} data={videoUrls} readOnly={readOnly} />
      {children}
    </Form>
  );
}

export default SignForm;
