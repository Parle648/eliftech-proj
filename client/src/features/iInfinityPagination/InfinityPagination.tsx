import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import updateEvents from './helpers/updateEvents';
import incrementCurrentPage from './helpers/incrementCurrentPage';
import axios from 'axios';
import appStore from '../../app/store';
import { addEvents } from '../slices/Events';

const InfinityPagination = () => {
  const sorts = useSelector((store: any) => store.SortBy.value);
  const currentPage = useSelector((store: any) => store.CurrentPage.value);
  const pages = useSelector((store: any) => store.Pages.value);

  useEffect(() => {
    const events: any = axios(
      'https://app.ticketmaster.com/discovery/v2/events/?apikey=ACmX1sPLree3vdF9CrVXLpPr6kAGvNhP',
    );

    events.then((object: any) => {
      const mappedEvents = object.data._embedded.events.map((event: any) => {
        return {
          title: event.name,
          id: event.id,
          description: 'from API',
          event_date: event.dates.start.dateTime,
          organizer: '',
        };
      });

      console.log();

      appStore.dispatch(addEvents(mappedEvents));
    });
  }, []);

  useEffect(() => {
    updateEvents(currentPage, sorts);
  }, [currentPage, sorts]);

  useEffect(() => {
    const scrollHandler = () => {
      if (
        document.body.scrollHeight - window.scrollY - window.innerHeight <=
          50 &&
        currentPage <= pages
      ) {
        document.removeEventListener('scroll', scrollHandler);
        console.log(currentPage);

        incrementCurrentPage();
      }
    };

    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [currentPage, sorts]);

  return <></>;
};

export default InfinityPagination;
