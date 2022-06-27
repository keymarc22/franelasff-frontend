import React, { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import {
  Route,
  Redirect
} from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(AppContext);

  return (
    <Route
      {...rest}
      render={
        ({location}) => (
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/auth/login',
                state: { from: location }
              }}
            />
          )
        )
      }
    />
  )
}

export { PrivateRoute };