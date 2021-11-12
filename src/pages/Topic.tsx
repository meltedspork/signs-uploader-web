import { Fragment, useState } from 'react';
import ResourceContext from '../contexts/ResourceContext';
import GetTopic from '../components/graphql/GetTopic';
import UpdateTopic from '../components/graphql/UpdateTopic';
import TopicForm from '../components/TopicForm';

const Sign = ({ match }: any) => {
  const {
    params: {
      uid: topicUid,
    }
  } = match;

  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uid, setUid] = useState(topicUid);
  const [data, setData] = useState(null);
  const [inputData, setInputData] = useState(null);
  const [readOnly, setReadOnly] = useState(true);

  const topicContextValues = {
    loaded,
    setLoaded,
    loading,
    setLoading,
    error,
    setError,
    readOnly,
    setReadOnly,
    uid,
    setUid,
    data: (data as any),
    setData,
    inputData: (inputData as any),
    setInputData,
    reset: false,
    setReset: (null as any),
  };

  return (
    <ResourceContext.Provider value={topicContextValues}>
      <ResourceContext.Consumer>
        {(context) => (
          <Fragment>
            <TopicForm>
              {context.readOnly ? <GetTopic /> : <UpdateTopic />}
            </TopicForm>
          </Fragment>
        )}
      </ResourceContext.Consumer>
    </ResourceContext.Provider>
  )
}

export default Sign;