import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <NavBar />
        <LoginForm />
      </div>
    );
  }
}

export default connect()(App);
