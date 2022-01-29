import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Constant } from './Constant';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/page/Home';
import Landing from './Components/page/Landing';
import ContactUs from './Components/page/ContactUs';
import Footer from './Components/footer/Footer';
import Account from './Components/page/Account';
import SignIn from './Components/page/SignIn';


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path={Constant.PATHS.LANDING}>
          <Navbar />
          <Landing imageSrc="https://i.goopics.net/807y83.jpg" imageSrc2="https://i.goopics.net/ouubgq.jpg" imageSrc3="https://i.goopics.net/2nhie8.jpg" />
        </Route>
        <Route exact path={Constant.PATHS.HOME}>
          <Navbar />
          

          <Home />
        </Route>
        <Route exact path={Constant.PATHS.CONTACTUS}>
          <ContactUs />
          <Navbar />
          <Footer/>
        </Route>
        <Route exact path={Constant.PATHS.SIGNIN}>
          <SignIn />
        </Route>
        <Route exact path={Constant.PATHS.ACCOUNT}>
          <Navbar/>
          <Account />
        </Route>
        <Route exact path="/Test">
        <Test/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
