import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles/visitorsFilters.module.scss';
import updateUsers from '../../widgets/UsersList/helpers/updateUsers';

const VisitorFilters = ({ id }: { id: Number }) => {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    updateUsers(`https://eliftech-proj.onrender.com/user?event_id=${id}`);
  }, []);

  function getByFilters(data: any) {
    updateUsers(
      `https://eliftech-proj.onrender.com/user?event_id=${id}${data.full_name && `&full_name=${data.full_name}`}${data.email && `&email=${data.email}`}`,
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(getByFilters)}>
      <label className={styles.label}>
        <h2>choose full_name</h2>
        <input type="text" {...register('full_name')} />
      </label>
      <label className={styles.label}>
        <h2>choose email</h2>
        <input type="text" {...register('email')} />
      </label>
      <input className={styles.submit} type="submit" />
    </form>
  );
};

export default VisitorFilters;
