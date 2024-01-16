import { RouterProvider } from 'react-router-dom';

import isPropValid from '@emotion/is-prop-valid';
import GlobalStyles from 'common/styles/global';
import router from './routes';
import { StyleSheetManager } from 'styled-components';
import { AppProvider } from 'hooks';

export default function App() {

  return (
    <StyleSheetManager
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string'
          ? isPropValid(propName)
          : true;
      }}
    >
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
      <GlobalStyles />
    </StyleSheetManager>
  );
}
