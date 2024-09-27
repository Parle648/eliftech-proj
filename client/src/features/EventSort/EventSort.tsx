import styles from './styles/eventSort.module.scss';
import OptionsList from './UI/SortList/SortList';

const EventSort = () => {
  return (
    <form className={styles.block}>
      <OptionsList />
    </form>
  );
};

export default EventSort;
