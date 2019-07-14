import React, { Component } from "react";
import Header from "./component/header";
import { Provider } from "react-redux";
import { GlobalStyle } from "./statics/iconfont/iconfont";
import { GlobalStyle1 } from "./style.js";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
// import Detail from "./pages/detail";
import Detail from "./pages/detail/loadable"; //异步加载组件
import Login from "./pages/login";
import Write from "./pages/write";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle1 />
        <GlobalStyle />
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/detail/:id" exact component={Detail} />
            <Route path="/login" exact component={Login} />
            <Route path="/Write" exact component={Write} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
