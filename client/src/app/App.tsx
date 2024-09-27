import { Provider } from 'react-redux';
import appStore from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import EventsPage from '../pages/EventsPage';
import RegistrationPage from '../pages/RegistrationPage';
import VisitPage from '../pages/VisitPage';

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={'loading ...'}>
                  <EventsPage />
                </Suspense>
              }
            ></Route>
            <Route
              path="/registr/:id"
              element={
                <Suspense fallback={'loading ...'}>
                  <RegistrationPage />
                </Suspense>
              }
            ></Route>
            <Route
              path="/view/:id"
              element={
                <Suspense fallback={'loading ...'}>
                  <VisitPage />
                </Suspense>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
