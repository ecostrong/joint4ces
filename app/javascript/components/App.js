import React from "react"
import PropTypes from "prop-types"
import Header from "./components/Header";
import {
BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BusinessIndex from "./pages/BusinessIndex";
import BusinessShow from "./pages/BusinessShow";
import BusinessEdit from "./pages/BusinessEdit";
import BusinessNew from "./pages/BusinessNew";
import MyListing from "./pages/MyListing";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

class App extends React.Component {
  render () {
    return (
      <Router>
          <h1>Joint 4ces App</h1>
          <Header />
          <Home />
            <Switch>
              <BusinessIndex />
              <BusinessShow />
              <BusinessEdit />
              <BusinessNew />
              <MyListing />
              <About />
              <NotFound />
            </Switch>
          <Footer />
      </Router>
    );
  }
}

export default App
