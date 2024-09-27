import appStore from '../../../app/store';
import { setCurrentCount } from '../../../features/slices/CurrentPage';

export default function updateCurrentCount(number: number) {
  appStore.dispatch(setCurrentCount(number));
}
