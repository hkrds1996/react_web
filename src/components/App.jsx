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
function App() {
  return (
    <div>
    <Router>
        <Header></Header>
        <Switch>
          <div className="switch app">
            <Route exact path="/">
              <Home className="home"></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/articles/:id" component={Article}>
            </Route>
            <Route path="/write" component={Write}></Route>
            <Route path="/logout" component={Logout}></Route>
          </div>
        </Switch>
        <Footer></Footer>      
    </Router>
    </div>
  );
}
export default App;