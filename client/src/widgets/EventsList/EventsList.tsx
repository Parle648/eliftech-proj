import { useSelector } from 'react-redux';
import EventCard from '../../entities/EventCard/EventCard';
import styles from './styles/eventsList.module.scss';

const EventsList = () => {
  const events = useSelector((state: any) => state.Events.value);

  return (
    <div className={styles.block}>
      {events.length > 0 &&
        events.map((event: any) => {
          return (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              description={event.description}
              event_date={new Date(event.event_date).toLocaleDateString()}
              organizer={event.organizer}
            />
          );
        })}
    </div>
  );
};

export default EventsList;
