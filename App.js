import React from 'react';
import {StatusBar , YellowBox } from 'react-native';
import Routes from './src/routes';

YellowBox.ignoreWarnings(['Unrecognized Websocket','Warning: componentWillReceiveProps']);

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor='#8e25f9'/>
    <Routes/>
    </>
  );
}
