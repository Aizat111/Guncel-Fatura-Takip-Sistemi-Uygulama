import * as React from 'react';
import {AuthProvider} from './src/context/AuthContext';
import AuthNav from './src/navigation/AuthNav';

function App() {
  return (
    <AuthProvider>
      <AuthNav />
    </AuthProvider>
  );
}

export default App;
