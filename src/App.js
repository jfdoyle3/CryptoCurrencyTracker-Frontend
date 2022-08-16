import './styling/App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter} from "react-router-dom"
import AppRouter from './components/Routers/AppRouter';
import {AuthProvider} from "./components/Providers/AuthProvider";
import {CurrenciesProvider} from './components/Providers/CurrenciesProvider';


library.add(fas);

function App() {

  return (
    <BrowserRouter>
       <AuthProvider>
        <CurrenciesProvider>
          <AppRouter />
        </CurrenciesProvider>
       </AuthProvider>
    </BrowserRouter>
  );
}

export default App;