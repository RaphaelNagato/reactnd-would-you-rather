import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import Leaderboard from "./LeaderBoard";
import LoginForm from "./LoginForm";
import MainCard from "./MainCard";
import NavBar from "./NavBar";
import NewQuestion from "./NewQuestion";
import QuestionDetail from "./QuestionDetail";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authUser } = this.props;
    return (
      <BrowserRouter>
        <Fragment>
          <NavBar />
          {authUser ? (
            <Fragment>
              <Route path="/" exact component={Home} />
              <Route path="/add" exact component={NewQuestion} />
              <Route path="/leaderboard" exact component={Leaderboard} />
              <Route
                path="/questions/:question_id"
                exact
                component={QuestionDetail}
              />
            </Fragment>
          ) : (
            <LoginForm />
          )}
        </Fragment>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps)(App);
