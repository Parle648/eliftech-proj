import { useSelector } from 'react-redux';
import UserCard from '../../entities/UserCard/UserCard';
import { useEffect } from 'react';
import updateUsers from './helpers/updateUsers';
import styles from './styles/usersList.module.scss';

const UsersList = ({ id }: { id: Number }) => {
  const users = useSelector((state: any) => state.Users.value);

  useEffect(() => {
    updateUsers(`http://localhost:3000/user?event_id=${id}`);
  }, []);

  return (
    <div className={styles.block}>
      {users.length > 0 &&
        users.map((user: any) => {
          return (
            <UserCard
              key={user.id}
              full_name={user.full_name}
              email={user.email}
            />
          );
        })}
    </div>
  );
};

export default UsersList;
