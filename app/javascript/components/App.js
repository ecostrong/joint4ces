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
          <Header />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/businessindex" component={BusinessIndex} />
            <Route path="/businessshow" component={BusinessShow} />
            <Route path="/businessedit" component={BusinessEdit} />
            <Route path="/businessnew" component={BusinessNew} />
            <Route path="/mylisting" component={MyListing} />
            <Route path="/about" component={About} />
            <Route path="/notfound" component={NotFound} />
            </Switch>
          <Footer />
      </Router>
    );
  }
}

export default App
