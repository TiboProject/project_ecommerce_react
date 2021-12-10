import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Constant } from './Constant';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/page/Home';
import Landing from './Components/page/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={Constant.PATHS.LANDING}>
          <Navbar />
          <Landing />
        </Route>
        <Route exact path={Constant.PATHS.HOME}>
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
