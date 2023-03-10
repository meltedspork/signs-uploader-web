import { useContext, useEffect, useState } from 'react';
import classNames from  'classnames';
import ResourceContext from '../contexts/ResourceContext';
import TextField from '../inputs/TextField';
import Form from 'react-bootstrap/Form';

const TopicForm = ({ children }: any) => {
  const {
    loading,
    error,
    data,
    setInputData,
    readOnly,
    reset,
    setReset,
  } = useContext(ResourceContext);

  const [inputName, setInputName] = useState('');

  useEffect(() => {
    if (loading || error) return;

    if (readOnly) {
      setInputName(data.name);
    } else if (reset) {
      setInputName('');
      setReset(false);
    }
    const updatedTopicData = {
      name: inputName,
    };
    setInputData(updatedTopicData);
  }, [
    setReset, reset,
    loading,
    error,
    readOnly,
    data,
    setInputData,
    setInputName, inputName,
  ]);

  return (
    <Form className={classNames({ loading: loading })}>
      <TextField label="Name" value={inputName} onChange={setInputName} readOnly={readOnly} />
      {children}
    </Form>
  );
}

export default TopicForm;