import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';  
import About from './components/about'
import Registration from './components/registration'
import Partner from './components/partners'
import Sponsor from './components/sponsors'
import Home from './components/home'

function App() {

  return (
    <div className="navi">
      <div> 
      <ul>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/about.js" activeClassName="navs">About Us</NavLink></li>
        <li><NavLink to="/partner.js" activeClassName="navs">Partners</NavLink></li>
        <li><NavLink to="/sponsors.js" activeClassName="navs">Sponsors</NavLink></li>
        <li><NavLink to="/registration.js" activeClassName="navs">Registration</NavLink></li>
      </ul>
      
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about.js" component={About}></Route>
      <Route path="/partner.js" component={Partner}></Route>
      <Route path="/sponsors.js" component={Sponsor}></Route>
      <Route path="/registration.js" component={Registration}></Route>     
    </Switch>
    </div>
    </div>
  )
  
}

ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>, document.getElementById('root'));