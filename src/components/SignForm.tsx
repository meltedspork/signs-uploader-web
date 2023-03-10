import { useContext, useEffect, useState } from 'react';
import classNames from  'classnames';
import ResourceContext from '../contexts/ResourceContext';
import TextField from '../inputs/TextField';
import SelectField from '../inputs/SelectField';
import VideoFields from '../inputs/VideoFields';
import Form from 'react-bootstrap/Form';

const SignForm = ({ children }: any) => {
  const {
    loading,
    error,
    data,
    setInputData,
    readOnly,
    resetReadOnly,
    setResetReadOnly,
    reset,
    setReset,
  } = useContext(ResourceContext);

  const [inputName, setInputName] = useState('');
  const [inputPronounce, setInputPronounce] = useState('');
  const [inputDefinition, setInputDefinition] = useState('');
  const [inputVideoFile, setInputVideoFile] = useState(null as any);
  const [inputVideos, setInputVideos] = useState([]);
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
          videos = [],
          topics = [],
        },
      } = data;

      setInputName(name);
      setInputPronounce(pronounce);
      setInputDefinition(definition);
      setInputVideos(videos);
      setInputTopics(topics);
      setResetReadOnly(false);
    } else if (reset) {
      setInputVideos([]);
      setInputName('');
      setInputPronounce('');
      setInputDefinition('');
      setInputVideos([]);
      setInputTopics([]);
      setReset(false);
    }

    const updatedSignData = {
      videoFile: inputVideoFile,
      name: inputName,
      pronounce: inputPronounce,
      definition: inputDefinition,
      topics: inputTopics.map(({ uid }: any) => uid),
    };
    console.log('updatedSignData', updatedSignData);
    setInputData(updatedSignData);
  }, [
    setResetReadOnly, resetReadOnly,
    setReset, reset,
    loading,
    error,
    readOnly,
    data,
    setInputData,
    inputVideoFile,
    setInputVideos, inputVideos,
    setInputName, inputName,
    setInputPronounce, inputPronounce,
    setInputDefinition, inputDefinition,
    setInputTopics, inputTopics, setOptTopics,
  ]);

  return (
    <Form className={classNames({ loading })}>
      <TextField label="Name" value={inputName} onChange={setInputName} readOnly={readOnly} />
      <TextField label="Pronounce" value={inputPronounce} onChange={setInputPronounce} readOnly={readOnly} />
      <TextField label="Definition" value={inputDefinition} onChange={setInputDefinition} readOnly={readOnly} />
      <SelectField label="Topics" value={inputTopics} options={optTopics} onChange={setInputTopics} readOnly={readOnly} />
      <VideoFields title={inputName} videos={inputVideos} videoFile={inputVideoFile} onChange={setInputVideoFile} readOnly={readOnly} />
      {children}
    </Form>
  );
}

export default SignForm;
