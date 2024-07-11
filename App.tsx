import 'react-native-url-polyfill/auto';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UniformContext } from '@uniformdev/context-react';
import { FetchContextProvider } from '@/context/FetchContextProvider';
import createUniformContext from '@/context/createUniformContext';
import MainNavigation from '@/navigation';

if (!window || !window.location) {
  window.location = {
    href: 'app://root',
  } as any;

  global.document = {
    location: {
      href: 'app://root',
    },
    cookie: '',
  } as any;
}

const clientContext = createUniformContext();

function App(): React.JSX.Element {
  return (
    <UniformContext context={clientContext}>
      <NavigationContainer>
        <FetchContextProvider initialSlug="/">
          <MainNavigation />
        </FetchContextProvider>
      </NavigationContainer>
    </UniformContext>
  );
}

export default App;
