import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import About from './About';
import Article from "./Article";
import Write from "./Write";
import Logout from './Logout';
import createHistory from 'history/createHashHistory'
const history = createHistory()
function App() {
  return (
    <div>
    <Router history={history}>
        <Header></Header>
        <Switch>
          <div className="switch app">
            <Route path="/">
              <Home className="home"></Home>
            </Route>
            <Route path="/react_web/about">
              <About></About>
            </Route>
            <Route path="/react_web/articles/:id" component={Article}>
            </Route>
            <Route path="/react_web/write" component={Write}></Route>
            <Route path="/react_web/logout" component={Logout}></Route>
          </div>
        </Switch>
        <Footer></Footer>      
    </Router>
    </div>
  );
}
export default App;