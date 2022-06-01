import React from "react"
import PropTypes from "prop-types"
import Header from "./components/Header";
import {
  BrowserRouter as Router,
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

  render() {
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
          {/* <Route path="/businessshow" component={BusinessShow} /> */}
          <Route
            path="/business/:id"
            render={(props) => {
              const id = +props.match.params.id
              const business = this.state.businesses.find(business => business.id === id)
              return <BusinessShow business={business} {...props} />
            }}
          />
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
