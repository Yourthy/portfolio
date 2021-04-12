import './App.css';
import { AboutMe, Projects, Resume, Contact} from './components/pages/index';
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
      <AboutMe/>
      <AboutMe/>
      {/* <Projects/> */}

      </Router>
    </div>
  );
}

export default App;
