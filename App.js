import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Routes />
    </>
  );
}

export default App;
