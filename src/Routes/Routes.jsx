import { createBrowserRouter } from 'react-router-dom';
import Login from '../Auth/Log/Login';
import Root from '../Root';
import Error from '../Error/Error';
import Home from '../Home/Home';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: 'chat',
        element: <Home />,
      },
      
      
    ],
  },
]);

export default Routes;
