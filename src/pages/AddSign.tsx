import { useState } from 'react';
import ResourceContext from '../contexts/ResourceContext';
import CreateSign from '../components/graphql/CreateSign';
import SignForm from '../components/SignForm';

const AddSign = ({ history }: any) => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uid, setUid] = useState(null);
  const [data, setData] = useState(null);
  const [inputData, setInputData] = useState(null);
  const [readOnly, setReadOnly] = useState(false);
  const [reset, setReset] = useState(false);

  const signContextValues = {
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
    <ResourceContext.Provider value={signContextValues}>
      <ResourceContext.Consumer>
        {() => (
          <SignForm>
            <CreateSign history={history} />
          </SignForm>
        )}
      </ResourceContext.Consumer>
    </ResourceContext.Provider>
  )
}

export default AddSign;