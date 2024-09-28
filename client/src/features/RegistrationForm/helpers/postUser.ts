import appStore from '../../../app/store';
import { setSpinnerVisible } from '../../../features/slices/SpinnerVisible';
import createUser from '../api/createUser';

export default function postUser(data: any) {
  appStore.dispatch(setSpinnerVisible(true));
  return createUser(data).then(() => {
    appStore.dispatch(setSpinnerVisible(false));
  });
}
