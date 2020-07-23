import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css';
import Homepage from './pages/HomePage';
import Finance from './pages/FinancePage';
import HealthAndBeauty from './pages/HealthAndBeautyPage';
import Lifestyle from './pages/LifestylePage'
import ArticlePage from './pages/ArticlePage'
import NavBar from './NavBar';
import { render } from '@testing-library/react';
//import {Grid} from "@material-ui/core";


//import { render } from '@testing-library/react';

class App extends Component {
    render() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Route path="/" component={Homepage} exact />
          <Route path="/finance" component={Finance} />
          <Route path="/health-and-beauty" component={HealthAndBeauty} />
          <Route path="/lifestyle" component={Lifestyle} />
          <Route path="/article/:articleName" component={ArticlePage} />
        </div>
      </div>
    </Router>

  )
};
};

export default App;
