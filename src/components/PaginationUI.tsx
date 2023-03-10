import { Fragment, useEffect, useContext, useState } from 'react';
import ResourcesContext from '../contexts/ResourcesContext';
import Pagination from 'react-bootstrap/Pagination';

const _generatePageObject = (currentPage: number, override: any = {}) => {
  const {
    page = 1,
    first = false,
    last = false,
  } = override;
  const active = page === currentPage;

  return Object.assign({
    page,
    active,
    first,
    last,
  }, override);
}

const _buildPagination = ({ page: currentPage, size: limit, total }: any) => {
  const totalPages = Math.ceil(total / limit);
  let pageNumbers = [-3, -2, -1, 0, 1, 2, 3].map(
    (second) => currentPage + second
  ).filter((page) => page > 0).filter((page) => page <= totalPages);

  const pageNumbersLastNext = pageNumbers[(pageNumbers.length - 1)] + 1;
  const pageNumbersFirstNext = pageNumbers[0] - 1;

  let pageNumbersRemaing = 15 - pageNumbers.length;
  const pageNumbersAfter = Array.from(Array(pageNumbersRemaing), (_, i) => i + pageNumbersLastNext);
  pageNumbers = pageNumbers.concat(pageNumbersAfter).filter((page) => page <= totalPages);

  pageNumbersRemaing = 15 - pageNumbers.length;
  const pageNumbersBefore = Array.from(Array(pageNumbersRemaing), (_, i) => pageNumbersFirstNext - i).reverse();
  pageNumbers = pageNumbersBefore.concat(pageNumbers).filter((page) => page > 0);

  let items = pageNumbers.map((page) => (_generatePageObject(currentPage, { page })));

  const itemsLength = items.length;
  if (itemsLength > 1) {
    if (items[0].page !== 1) {
      const indexPagesStart = items.map((item) => item.page);
      const setAsFirst = !indexPagesStart.includes(2);
      if (setAsFirst) {
        items.shift();
      } else {
        items.pop();
      }
      items.unshift(_generatePageObject(currentPage, {
        first: setAsFirst,
      }));
    }
    if (items[(itemsLength - 1)].page !== totalPages) {
      items.pop();
      const indexPagesEnd = items.map((item) => item.page);
      items.push(_generatePageObject(currentPage, {
        page: totalPages,
        last: !indexPagesEnd.includes((totalPages - 1)),
      }));
    }
  }

  return items;
}

const PaginationUI = ({
  resourcePath,
  history,
}: any) => {
  const {
    loading,
    setLoading,
    error,
    pagination,
    fetchMore: fetchMoreArr,
    setPagination,
    setPage,
    size,
    setSize,
    setData,
  } = useContext(ResourcesContext);
  const fetchMore = fetchMoreArr[0];
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (loading || error) return;
    const builtItems: any = _buildPagination(pagination);
    setItems(builtItems);
  }, [
    loading,
    error,
    pagination,
    setItems,
  ]);

  if (items.length <= 1) return <Fragment />;

  return (
    <Pagination>
      {items.map(({ page, active, first, last }:any) => {
        return (
          <Fragment key={page}>
            {last && <Pagination.Ellipsis disabled={true} />}
            <Pagination.Item
              active={active}
              onClick={() => {
                fetchMore({
                  variables: { page, size },
                  updateQuery: (previous: any, { fetchMoreResult }: any) => {
                    setLoading(false);
                    const {
                      viewSigns,
                      pagination,
                    } = fetchMoreResult;

                    setData(viewSigns);
                    setPagination(pagination);
                    setPage(pagination.page);
                    setSize(pagination.size);

                    history.push(`/${resourcePath}/${pagination.page}`);
                    return fetchMoreResult || previous;
                  },
                });
              }}>
              {page}
            </Pagination.Item>
            {first && <Pagination.Ellipsis disabled={true} />}
          </Fragment>
        )
      })}
    </Pagination>
  )
}

export default PaginationUI;