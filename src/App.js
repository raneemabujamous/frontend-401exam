import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Faveroite from "./component/Faveroite";
import Header from "./component/Header";
import Profile from "./component/Profile";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/fav">
              <Faveroite />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
{
  /* @todo show login button and hide the list for unauthenticated users */
}
//         {/* @todo show logout button and show items list components for authenticated users */}
// import React, { Component } from "react";
// import Home from "./component/Home";
// import { withAuth0 } from "@auth0/auth0-react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <Home />
//         {/* @todo show login button and hide the list for unauthenticated users */}
//         {/* @todo show logout button and show items list components for authenticated users */}
//       </div>
//     );
//   }
// }

// export default withAuth0(App);
