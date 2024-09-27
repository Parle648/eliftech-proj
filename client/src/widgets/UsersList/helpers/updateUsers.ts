import appStore from '../../../app/store';
import { setSpinnerVisible } from '../../../features/slices/SpinnerVisible';
import { setUsers } from '../../../features/slices/Users';
import getUsers from '../api/getUsers';

export default function updateUsers(url: string) {
  appStore.dispatch(setSpinnerVisible(true));
  getUsers(url)
    .then((response) => appStore.dispatch(setUsers(response.data)))
    .finally(() => appStore.dispatch(setSpinnerVisible(false)));
}
