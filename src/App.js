import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter} from "react-router-dom"
import AppRouter from './components/Routers/AppRouter';
import {AuthProvider} from "./components/Providers/AuthProvider";
import {CurrenciesProvider} from './components/Providers/CurrenciesProvider';
import { TrackerProvider } from './components/Providers/TrackerProvider';
import './styling/App.css';


library.add(fas);

function App() {

  return (
  <React.StrictMode> 
    <BrowserRouter>
       <AuthProvider>
        <TrackerProvider>
          <CurrenciesProvider>
            <AppRouter />
          </CurrenciesProvider>
        </TrackerProvider>
       </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;