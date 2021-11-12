import { useState } from 'react';
import ResourceContext from '../contexts/ResourceContext';
import CreateTopic from '../components/graphql/CreateTopic';
import TopicForm from '../components/TopicForm';

const AddTopic = ({ history }: any) => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uid, setUid] = useState(null);
  const [data, setData] = useState(null);
  const [inputData, setInputData] = useState(null);
  const [readOnly, setReadOnly] = useState(false);
  const [reset, setReset] = useState(false);

  const topicContextValues = {
    loaded,
    setLoaded,
    loading,
    setLoading,
    error,
    setError,
    readOnly,
    setReadOnly,
    uid: (uid as any),
    setUid,
    data: (data as any),
    setData,
    inputData: (inputData as any),
    setInputData,
    reset,
    setReset,
  };

  return (
    <ResourceContext.Provider value={topicContextValues}>
      <ResourceContext.Consumer>
        {() => (
          <TopicForm>
            <CreateTopic history={history} />
          </TopicForm>
        )}
      </ResourceContext.Consumer>
    </ResourceContext.Provider>
  )
}

export default AddTopic;