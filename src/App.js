import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Constant } from './Constant';
import Home from './page/Home';
import Landing from './page/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={Constant.PATHS.LANDING}>
          <Landing/>
        </Route>
        <Route exact path={Constant.PATHS.HOME}>
          <Home/>
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
