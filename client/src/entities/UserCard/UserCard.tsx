import styles from './styles/userCard.module.scss';
import { IUserCard } from './types/userCard';

const UserCard = ({ full_name, email }: IUserCard) => {
  return (
    <div className={styles.block}>
      <h2>{full_name}</h2>
      <h2>{email}</h2>
    </div>
  );
};

export default UserCard;
