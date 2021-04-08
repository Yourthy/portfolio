import './App.css';
import { Home, AboutMe, Projects} from './components/pages/index';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Projects/>

      </Router>
    </div>
  );
}

export default App;
