import styles from './styles/eventCard.module.scss';
import { IEvent } from './types/IEvent';
import { Link } from 'react-router-dom';

const EventCard = ({
  id,
  title,
  description,
  event_date,
  organizer,
}: IEvent) => {
  return (
    <div className={styles.block}>
      <h2>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.flexbox}>
        <span>{event_date}</span> <span>{organizer}</span>
      </div>
      <div className={styles.flexbox}>
        <Link to={`registr/:${id}`}>registration</Link>
        <Link to={`view/:${id}`}>view</Link>
      </div>
    </div>
  );
};

export default EventCard;
