import React from 'react';
import { createRoot } from 'react-dom/client';
import "./styles.css";
import App from './App/App';
import { store } from './App/store.js';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ChakraProvider>
            <App/>
        </ChakraProvider>
    </Provider>);
