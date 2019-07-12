import React, { Component } from 'react';
import Header from './component/header';
import { Provider } from 'react-redux';
import { GlobalStyle } from './statics/iconfont/iconfont';
import { GlobalStyle1 } from './style.js';
import store from './store'
import {BrowserHistory as Router,Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <GlobalStyle1 />
          <GlobalStyle />
          <Header />
          <Router>
          <Route path='./' render={()=><div>home</div>}></Route>
          <Route path='./detail' render={()=><div>detail</div>}>
          </Route>
          </Router>
        </Provider>
    
    );
  }
}

export default App;
