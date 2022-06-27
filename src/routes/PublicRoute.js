import React, { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import {
  Route,
  Redirect
} from 'react-router-dom';

const PublicRoute = ({ children, ...rest }) => {
  const { user } = useContext(AppContext);

  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          !user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location }
              }}
            />
          )
        )
      }
    />
  )
}

export { PublicRoute };