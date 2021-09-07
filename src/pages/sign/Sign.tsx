import { useState } from 'react';
import SignContext from '../../contexts/SignContext';
import AddSign from './AddSign';
import GetSign from './GetSign';
import UpdateSign from './UpdateSign';
import SignForm from '../../components/SignForm';

const Sign = ({ history, match }: any) => {
  const {
    params: {
      uid: signUid,
    }
  } = match;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uid, setUid] = useState(signUid);
  const [signData, setSignData] = useState(null);
  const [inputSignData, setInputSignData] = useState(null);
  const [readOnly, setReadOnly] = useState(true);

  const signContextValues = {
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
  };

  return (
    <SignContext.Provider value={signContextValues}>
      <SignContext.Consumer>
        {(context) => (
          <SignForm>
            {context.uid ? [
              (context.loading ? <GetSign key={0} /> : <UpdateSign key={0} />),
            ] : <AddSign history={history} />}
          </SignForm>
        )}
      </SignContext.Consumer>
    </SignContext.Provider>
  )
}

export default Sign;