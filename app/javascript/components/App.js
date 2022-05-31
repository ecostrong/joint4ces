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
import { Button } from "reactstrap";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      businesses: []
    }
  }
  componentDidMount() {
    this.indexBusinesses()
  }
  indexBusinesses = () => {
    fetch("/businesses")
    .then(response => {
      return response.json()
    })
    .then(payload => {
      this.setState({ businesses: payload })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  handleCreateBusiness = (newBusiness) => {
    console.log(("We did it"))
  }

  render () {
    // console.log(this.state.businesses)
    return (
      <Router>
          <Header {...this.props} />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route
                path="/businessindex"
                render={(props) => <BusinessIndex businesses={this.state.businesses} />}
                />
            {/* <Route path="/businessindex" component={BusinessIndex} /> */}
            <Route path="/businessshow" component={BusinessShow} />
            <Route path="/businessedit" component={BusinessEdit} />
            <Route path="/businessnew" component={BusinessNew} />
            <Route path="/mylisting" component={MyListing} />
            <Route path="/about" component={About} />
            <Route path="/notfound" component={NotFound} />
            </Switch>
          <Footer />
          <Button onClick={this.indexBusinesses}>Test Fetch</Button>
      </Router>
    );
  }
}

export default App
