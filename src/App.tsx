import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';

// Import auth routes from vritti-auth MF
// @ts-ignore - Remote module

const AppRoutes = () => {
  return useRoutes(routes);
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
