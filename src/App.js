import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

// routes

import { PrivateRoute } from 'routes/PrivateRoute';
import { PublicRoute } from 'routes/PublicRoute';
import { ProtectedRoutes } from "./routes/ProtectedRoutes";

// components

import { Loader } from './components/Loader';
import { AppContext } from 'context/AppContext';
import { useInitialState } from 'hooks/useInitialState';

// layouts

const Admin = lazy(() => import("layouts/Admin.js"))
const Auth = lazy(() => import("layouts/Auth.js"))

const App = () => {
  const initialState = useInitialState();
  const { verify } = initialState;

  return (
    <AppContext.Provider value={initialState}>
      {verify &&
        <Router>
          <Suspense
            delayMs={500}
            fallback={<Loader />}
          >
            <Switch>
              <PublicRoute path="/auth" >
                <Route path="/auth" component={Auth} />
              </PublicRoute>

              <PrivateRoute path="/" >
                {/* add routes with layouts */}
                <Route path="/" component={Admin} />
              </PrivateRoute>

              {/* add redirect for first page */}
              <Redirect from="*" to="/" />
            </Switch>
          </Suspense>
        </Router>
      }
    </AppContext.Provider>
  )
}

export { App };