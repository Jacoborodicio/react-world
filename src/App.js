import React, { Component } from 'react';
import Home from './containers/Home/Home';
import { BrowserRouter, Route } from "react-router-dom";
import Lifecycle from './containers/Lifecycle/Lifecycle';
import Functions from './containers/Functions/Functions';
import Rendering from './containers/Rendering/Rendering';
import Styling from './containers/Styling/Styling';
import Spliting from './containers/Spliting/Spliting';
import Performance from './containers/Performance/Performance';

class App extends Component {
  render() {
    return (
      <div className="App" style={{padding: '1rem'}}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/lifecycle" component={Lifecycle} />
        <Route path="/functions" component={Functions} />
        <Route path="/rendering" component={Rendering} />
        <Route path="/styling" component={Styling} />
        <Route path="/spliting" component={Spliting} />
        <Route path="/performance" component={Performance} />
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
