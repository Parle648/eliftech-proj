import appStore from '../../../app/store';
import { setCurrentCount } from '../../../features/slices/CurrentPage';
import { setSorts } from '../../../features/slices/SortBy';

export default function updateSort(data: {
  name: string | undefined;
  value: number;
}) {
  appStore.dispatch(setSorts(data));
  appStore.dispatch(setCurrentCount(1));
}
