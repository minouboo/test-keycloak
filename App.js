import * as React from 'react';

import { ReactNativeKeycloakProvider, RNKeycloak } from '@react-keycloak/native';
import Login from './Login';

const keycloak = new RNKeycloak({
  url: 'https://auth2.skill-explorer.com/',
  realm: 'visitcard',
  clientId: 'login-app',
});

export default function App() {
  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{ redirectUri: 'myapp://Homepage' }}
    >
      <Login />
    </ReactNativeKeycloakProvider>
  );
}
