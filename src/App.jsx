import Index from './pages/index';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './styles/styles.css';
import Pug from './pages/Pug';



function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/pug" element={<Pug/>}/>
          <Route path="/"element={<Index/>}/>
          </Routes>
      </Router>
    </div>
        );
}

/*también se puede con los props, pero así es más chimba*/

export default App;
