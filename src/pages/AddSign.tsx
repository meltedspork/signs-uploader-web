import { useState } from 'react';
import SignContext from '../contexts/SignContext';
import CreateSign from '../components/graphql/CreateSign';
import SignForm from '../components/SignForm';

const AddSign = ({ history }: any) => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uid, setUid] = useState(null);
  const [signData, setSignData] = useState(null);
  const [inputSignData, setInputSignData] = useState(null);
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
    signData: (signData as any),
    setSignData,
    inputSignData: (inputSignData as any),
    setInputSignData,
    reset,
    setReset,
  };

  return (
    <SignContext.Provider value={signContextValues}>
      <SignContext.Consumer>
        {() => (
          <SignForm>
            <CreateSign history={history} />
          </SignForm>
        )}
      </SignContext.Consumer>
    </SignContext.Provider>
  )
}

export default AddSign;