import { Fragment, useState } from 'react';
import SignsContext from '../contexts/SignsContext';
import AllSigns from '../components/graphql/AllSigns';
import SignsTable from '../components/SignsTable';

const Signs = ({ history }: any) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [signs, setSigns] = useState([]);

  const signsContextValues = {
    loading,
    setLoading,
    error,
    setError,
    signs: (signs as any),
    setSigns,
  }

  return (
    <SignsContext.Provider value={signsContextValues}>
      <SignsContext.Consumer>
        {() => (
          <Fragment>
            <h1>Signs</h1>
            <AllSigns />
            <SignsTable history={history} />
          </Fragment>
        )}
      </SignsContext.Consumer>
    </SignsContext.Provider>
  )
}

export default Signs;
