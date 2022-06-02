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

  createNewBusiness = (newBusiness) => {
    fetch("/businesses", {
      body: JSON.stringify(newBusiness),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => {
        if (response.status === 422) {
          alert("There is something wrong with your submission.")
        }
        return response.json()
      })
      .then(() => {
        this.indexBusinesses()
      })
      .catch(errors => {
        console.log("create errors:", errors)
      })
  }

  render() {
    const {
      logged_in,
      current_user,
      sign_in_route,
      sign_out_route,
      sign_up_route
    } = this.props
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/businessindex"
            render={(props) => <BusinessIndex businesses={this.state.businesses} />}
          />
          <Route
            path="/business/:id"
            render={(props) => {
              const id = +props.match.params.id
              const business = this.state.businesses.find(business => business.id === id)
              return <BusinessShow business={business} {...props} />
            }}
          />
          <Route path="/businessedit" component={BusinessEdit} />
          <Route
            path="/businesses/new"
            render={(props) =>  {
              console.log("current user", current_user)
              return <BusinessNew
                createNewBusiness={this.createNewBusiness}
                current_user={current_user}{...props}
              />
            }}
          />
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
