import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Constant } from './Constant';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/page/Home';
import Landing from './Components/page/Landing';
import ContactUs from './Components/page/ContactUs';
import Test from './test';

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
        <Route exact path={Constant.PATHS.CONTACTUS}>
          <Navbar/>
          <ContactUs/>
        </Route>
        <Route exact path="/Test">
        <Test/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
