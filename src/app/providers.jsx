'use client';

import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
import store from '@/redux/store';

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
}
