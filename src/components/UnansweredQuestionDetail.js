import React, { Component } from "react";
import { Card, Form, Radio } from "semantic-ui-react";

export default class UnansweredQuestionDetail extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <Card.Content>
        <Form>
          <Form.Field>
            <Radio
              label="Ce this"
              name="radioGroup"
              value="this"
              checked={this.state.value === "this"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Or that"
              name="radioGroup"
              value="that"
              checked={this.state.value === "that"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Button color="teal">Choose</Form.Button>
        </Form>
      </Card.Content>
    );
  }
}
