import { useState } from 'react';
import SignContext from '../contexts/SignContext';
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
  const [signData, setSignData] = useState(null);
  const [inputSignData, setInputSignData] = useState(null);
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
    signData: (signData as any),
    setSignData,
    inputSignData: (inputSignData as any),
    setInputSignData,
    reset: false,
    setReset: (null as any),
  };

  return (
    <SignContext.Provider value={signContextValues}>
      <SignContext.Consumer>
        {(context) => (
          <SignForm>
            {context.readOnly ? <GetSign /> : <UpdateSign />}
          </SignForm>
        )}
      </SignContext.Consumer>
    </SignContext.Provider>
  )
}

export default Sign;