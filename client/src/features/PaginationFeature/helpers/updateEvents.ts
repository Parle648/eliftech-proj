import appStore from '../../../app/store';
import { setEvents } from '../../../features/slices/Events';
import { setPages } from '../../../features/slices/Pages';
import { setSpinnerVisible } from '../../../features/slices/SpinnerVisible';
import getAllEvents from '../api/getAllEvents';

export default function updateEvents(number: number, sorts: any) {
  appStore.dispatch(setSpinnerVisible(true));
  return getAllEvents(
    `http://localhost:3000/event/pages/${number}${sorts.name === '' ? '' : `?name=${sorts.name}&value=${sorts.value}`}`,
  ).then((response) => {
    appStore.dispatch(setEvents(response.data.events));
    appStore.dispatch(setPages(response.data.length));
    appStore.dispatch(setSpinnerVisible(false));
  });
}
