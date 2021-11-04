import { Fragment, useContext } from 'react';
import SignsContext from '../contexts/SignsContext';
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

const _buildPagination = ({ currentPage, limit, total }: any) => {
  const totalPages = Math.ceil(total / limit);
  let pageNumbers = [-3, -2, -1, 0, 1, 2, 3].map(
    (second) => currentPage + second
  ).filter((page) => page > 0 || page <= totalPages);

  const pageNumbersLastNext = pageNumbers[(pageNumbers.length - 1)] + 1;
  const pageNumbersFirstNext = pageNumbers[0] - 1;

  let pageNumbersRemaing = 15 - pageNumbers.length;
  const pageNumbersAfter = Array.from(Array(pageNumbersRemaing), (_, i) => i + pageNumbersLastNext);
  pageNumbers = pageNumbers.concat(pageNumbersAfter).filter((page) => page <= totalPages);

  pageNumbersRemaing = 15 - pageNumbers.length;
  const pageNumbersBefore = Array.from(Array(pageNumbersRemaing), (_, i) => pageNumbersFirstNext - i).reverse();
  pageNumbers = pageNumbersBefore.concat(pageNumbers).filter((page) => page > 0);

  const items = pageNumbers.map((page) => (_generatePageObject(currentPage, { page })));

  const itemsLength = items.length;
  if (itemsLength > 0) {
    if (items[0].page !== 1) {
      const itemSecondFirstPage = (itemsLength > 1) ? items[1].page : null;
      items.unshift(_generatePageObject(currentPage, {
        first: 2 !== itemSecondFirstPage,
      }));
    }
    if (items[itemsLength].page !== totalPages) {
      const itemSecondLastPage = (itemsLength > 1) ? items[itemsLength - 1].page : null;
      items.push(_generatePageObject(currentPage, {
        page: totalPages,
        last: (totalPages - 1) !== itemSecondLastPage,
      }));
    }
  }

  return items;
}

const PaginationUI = ({ history }: any) => {
  const { pagination } = useContext(SignsContext);
  console.log('pagination', pagination);

  if (pagination.total <= 0) return <Fragment />;

  const items = _buildPagination(pagination);
  console.log('items', items);

  return (
    <Pagination>
      {items.map(({ page, active, first, last }:any) => {
        return (
          <Fragment key={page}>
            {last && <Pagination.Ellipsis />}
            <Pagination.Item
              active={active}
              onClick={() => { history.push(`/signs/${page}`) }}>
              {page}
            </Pagination.Item>
            {first && <Pagination.Ellipsis />}
          </Fragment>
        )
      })}
    </Pagination>
  )
}

export default PaginationUI;