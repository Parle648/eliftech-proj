import { useNavigate } from 'react-router-dom';
import postUser from './helpers/postUser';
import styles from './styles/registrationForm.module.scss';
import { useForm } from 'react-hook-form';

interface IForm {
  full_name: string;
  email: string;
  date_of_birth: Date;
  where_hear: string;
}

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const id = new Number(window.location.href.split(':').at(-1));
  const navigate = useNavigate();

  function registerOnEvent(data: any) {
    postUser({
      ...data,
      date_of_birth: new Date(data['date_of_birth']),
      event_id: id,
    }).then(() => navigate('/'));
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(registerOnEvent)}>
      <h2>Event registration</h2>
      <label className={styles.label}>
        enter your full name
        <input
          className={errors.full_name && styles.invalidInput}
          type="text"
          {...register('full_name', {
            required: 'this field must be not empty',
            minLength: {
              value: 3,
              message: 'name must be more than 3 characters',
            },
            pattern: {
              value: /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/,
              message: 'asd',
            },
          })}
        />
        {errors.full_name && (
          <span className={styles.errorMessage}>
            {errors.full_name.message}
          </span>
        )}
      </label>
      <label className={styles.label}>
        enter your email
        <input
          className={errors.email && styles.invalidInput}
          type="email"
          {...register('email', {
            required: 'this field must be not empty',
          })}
        />
        {errors.email && (
          <span className={styles.errorMessage}>{errors.email.message}</span>
        )}
      </label>
      <label className={styles.label}>
        enter your date of birth
        <input
          className={errors.date_of_birth && styles.invalidInput}
          type="date"
          {...register('date_of_birth', {
            required: 'this field must be not empty',
          })}
        />
        {errors.date_of_birth && (
          <span className={styles.errorMessage}>
            {errors.date_of_birth.message}
          </span>
        )}
      </label>

      <label className={styles.label}>
        how did you find us
        <div>
          <label>
            <input type="radio" value="first" {...register('where_hear')} />{' '}
            social media
          </label>
          <label>
            <input type="radio" value="second" {...register('where_hear')} />{' '}
            friends
          </label>
          <label>
            <input type="radio" value="third" {...register('where_hear')} />{' '}
            found myself
          </label>
        </div>
      </label>

      <input type="submit" value="register" />
    </form>
  );
}

export default RegistrationForm;
