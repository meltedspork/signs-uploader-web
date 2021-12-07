import { Fragment, useState } from 'react';
import ResourcesContext from '../contexts/ResourcesContext';
import ResourcesTable from '../components/ResourcesTable';
import PaginationUI from '../components/PaginationUI';
import resourceConstant from '../constants/resourceConstant';
import { capitalize } from '../services/textService';

const Resources = ({
  resourceKey,
  children,
  history,
  match
}: any) => {
  const resource: any = (resourceConstant as any)[resourceKey];
  const resourceName = resource.resource;
  const resourcesName = resource.resources;
  const {
    params: {
      page: currentPage = 1,
      size: currentSize = 15,
    }
  } = match;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    page: Number(currentPage),
    size: Number(currentSize),
    total: 0,
  });
  const [page, setPage] = useState(Number(currentPage));
  const [size, setSize] = useState(Number(currentSize));
  const [fetchMore, setFetchMore] = useState([]);

  const contextValues = {
    loading,
    setLoading,
    error,
    setError,
    data: (data as any),
    setData,
    pagination,
    setPagination,
    page,
    setPage,
    size,
    setSize,
    fetchMore: (fetchMore as any),
    setFetchMore,
  }

  return (
    <ResourcesContext.Provider value={contextValues}>
      <ResourcesContext.Consumer>
        {() => (
          <Fragment>
            <h1>{capitalize(resource.resourceName)}</h1>
            <PaginationUI history={history} resourcePath={resourcesName} />
            {children}
            <ResourcesTable history={history} resourcePath={resourceName} />
          </Fragment>
        )}
      </ResourcesContext.Consumer>
    </ResourcesContext.Provider>
  )
}

export default Resources;
