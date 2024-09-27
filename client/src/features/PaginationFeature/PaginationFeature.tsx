import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './styles/paginationFeature.module.scss';
import updateEvents from './helpers/updateEvents';
import updateCurrentCount from './helpers/updateCurrentCount';

const PaginationFeature = () => {
  const eventsCount = useSelector((state: any) => state.Pages.value);
  const curretnPage = useSelector((state: any) => state.CurrentPage.value);

  const pagesCount = Array.from(
    { length: Math.round(eventsCount / 10) },
    (_, index) => index + 1,
  );

  const sorts = useSelector((state: any) => state.SortBy.value);

  useEffect(() => {
    if (sorts.name === '') {
      updateEvents(0, sorts);
    } else {
      updateEvents(0, sorts);
    }
  }, [sorts]);

  function updatePage(event: React.MouseEvent<HTMLButtonElement>) {
    updateEvents(+event.currentTarget.innerText - 1, sorts);
    updateCurrentCount(+event.currentTarget.innerText);
  }

  return (
    <div className={styles.block}>
      <button
        className={styles.navBtn}
        onClick={() => {
          if (curretnPage > 1) {
            updateCurrentCount(curretnPage - 1);
            updateEvents(curretnPage - 2, sorts);
          }
        }}
      >
        {'<'}
      </button>
      {pagesCount.map((number: number) => {
        return (
          <button
            className={`${styles.pageBtn} ${curretnPage === number && styles.currentPageBtn}`}
            onClick={updatePage}
          >
            {number}
          </button>
        );
      })}
      <button
        className={styles.navBtn}
        onClick={() => {
          if (curretnPage < eventsCount / 10) {
            updateCurrentCount(curretnPage + 1);
            updateEvents(curretnPage, sorts);
          }
        }}
      >
        {'>'}
      </button>
    </div>
  );
};

export default PaginationFeature;
