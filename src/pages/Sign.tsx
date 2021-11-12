import { useState } from 'react';
import ResourceContext from '../contexts/ResourceContext';
import GetSign from '../components/graphql/GetSign';
import UpdateSign from '../components/graphql/UpdateSign';
import SignForm from '../components/SignForm';

const Sign = ({ match }: any) => {
  const {
    params: {
      uid: signUid,
    }
  } = match;

  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uid, setUid] = useState(signUid);
  const [data, setData] = useState(null);
  const [inputData, setInputData] = useState(null);
  const [readOnly, setReadOnly] = useState(true);

  const signContextValues = {
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
    <ResourceContext.Provider value={signContextValues}>
      <ResourceContext.Consumer>
        {(context) => (
          <SignForm>
            {context.readOnly ? <GetSign /> : <UpdateSign />}
          </SignForm>
        )}
      </ResourceContext.Consumer>
    </ResourceContext.Provider>
  )
}

export default Sign;