import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import App from './app';


const theme = extendTheme({});


ReactDOM.render(
  <ChakraProvider theme={theme}><App/></ChakraProvider>,
  document.getElementById('app')
);
