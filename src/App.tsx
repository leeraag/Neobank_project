// import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "@router";
import '@assets/styles/index.scss';
import { Provider } from 'react-redux';
import store, { persistor } from './store/main'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default App;
