import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Grid, Segment, Header } from "semantic-ui-react";
import { handleNewQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(() => ({
      [name]: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOne, optionTwo } = this.state;

    const { dispatch } = this.props;

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
    }));

    return dispatch(handleNewQuestion(optionOne, optionTwo));
  };

  isButtonDisabled = (str) => {
    return str === null || /^\s*$/.test(str);
  };
  render() {
    const { optionOne, optionTwo } = this.state;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 500 }}>
          <Header as="h2" color="teal" textAlign="center">
            Would you rather...
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Field>
                <label>Option One:</label>
                <input
                  name="optionOne"
                  value={optionOne}
                  placeholder="First Option"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Option Two:</label>
                <input
                  name="optionTwo"
                  value={optionTwo}
                  placeholder="Second Option"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Button
                color="teal"
                type="submit"
                disabled={
                  this.isButtonDisabled(optionOne) ||
                  this.isButtonDisabled(optionTwo)
                }
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect()(NewQuestion);
