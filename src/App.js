import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter} from "react-router-dom"
import AppRouter from './components/Routers/AppRouter';


library.add(fas);

function App() {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;