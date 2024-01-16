import { Outlet, createBrowserRouter } from 'react-router-dom';
import { api } from 'services/api'
import ProductMFE from 'product-mfe/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <div>
          <ProductMFE.Home />
        </div>, // Remote application
      },
    ],
  },
]);

export default router;
