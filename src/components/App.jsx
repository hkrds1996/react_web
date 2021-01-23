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
            <Route path="/dashboard">
            </Route>
            <Route path="/articles/:id" component={Article}>
            </Route>
          </div>
        </Switch>
        <Footer></Footer>      
    </Router>
    </div>
  );
}
export default App;