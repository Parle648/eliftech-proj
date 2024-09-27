import appStore from '../../../app/store';
import { incrementCurrent } from '../../../features/slices/CurrentPage';

export default function incrementCurrentPage() {
  appStore.dispatch(incrementCurrent());
  return appStore.getState().CurrentPage.value;
}
