import { Route, Switch } from 'react-router-dom';
import routes from './routes';

const ProtectedRoutes = () => {
  return (
    <Switch>
      {routes.map(({component: Component, path, exact}) => (
        <Route
          path={path}
          exact={exact}
          key={path}
          component={Component}
        />
      ))}
    </Switch>
  )
}

export { ProtectedRoutes };