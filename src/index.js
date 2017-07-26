import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
//IMPORT COMPONENTS
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './components/About'
import FindUs from './components/Findus'
import Menu from './components/Menu'
import Layout from './components/Layout'




ReactDOM.render(

  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/menu' component={Menu} />
        <Route path='/contact' component={FindUs} />
        <Route path='/' component={About} />

      </Switch>
    </Layout>
  </BrowserRouter>



,document.getElementById('root'));
registerServiceWorker();
