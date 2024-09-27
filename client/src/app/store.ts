import { configureStore } from '@reduxjs/toolkit';
import Events from '../features/slices/Events';
import Pages from '../features/slices/Pages';
import CurrentPage from '../features/slices/CurrentPage';
import SpinnerVisible from '../features/slices/SpinnerVisible';
import Users from '../features/slices/Users';
import SortBy from '../features/slices/SortBy';

const appStore = configureStore({
  reducer: {
    Events: Events,
    Pages: Pages,
    CurrentPage: CurrentPage,
    SpinnerVisible: SpinnerVisible,
    Users: Users,
    SortBy: SortBy,
  },
});

export default appStore;
