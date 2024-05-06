import './index.css';

import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { DOMAIN_PREFIX } from "./app/commonApi";
import { store, persistor } from "./app/store";

//import reportWebVitals from "./reportWebVitals";
import { RequireAuth } from "./components/RequireAuth";

import "bootstrap/dist/css/bootstrap.min.css";

const App = React.lazy(() => import("./App"));

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
