import appStore from '../../../app/store';
import { addEvents } from '../../../features/slices/Events';
import { setPages } from '../../../features/slices/Pages';
import { setSpinnerVisible } from '../../../features/slices/SpinnerVisible';
import getAllEvents from '../api/getAllEvents';

export default async function updateEvents(number: number, sorts: any) {
  appStore.dispatch(setSpinnerVisible(true));
  const response = await getAllEvents(
    `http://localhost:3000/event/pages/${number}${sorts.name === '' ? '' : `?name=${sorts.name}&value=${sorts.value}`}`,
  );

  appStore.dispatch(addEvents(response.data.events));
  appStore.dispatch(setPages(Math.round(response.data.length / 10)));
  appStore.dispatch(setSpinnerVisible(false));
}
