import { useState } from 'react';
import ResourceContext from '../contexts/ResourceContext';

const Resource = ({ children, uid: resourceUid }: any) => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uid, setUid] = useState(resourceUid);
  const [data, setData] = useState(null);
  const [inputData, setInputData] = useState(null);
  const [readOnly, setReadOnly] = useState(true);

  const contextValues = {
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
    <ResourceContext.Provider value={contextValues}>
      <ResourceContext.Consumer>
        {children}
      </ResourceContext.Consumer>
    </ResourceContext.Provider>
  )
}

export default Resource;