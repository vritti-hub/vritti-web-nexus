import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';

// Import auth routes from vritti-auth MF
// @ts-ignore - Remote module

const App = () => {
  const app = useRoutes(routes);
  return <BrowserRouter>{app}</BrowserRouter>;
};

export default App;
