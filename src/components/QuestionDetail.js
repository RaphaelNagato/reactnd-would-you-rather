import React, { Component } from "react";
import { Card, Button, Progress } from "semantic-ui-react";
import UnansweredQuestionDetail from "./UnansweredQuestionDetail";

const AnsweredStatus = () => (
  //TODO: show question results
  <Card.Content>
    <Card.Header>Results</Card.Header>
    <div>
      <p>Option One:</p>
      <Progress percent={44} progress />
    </div>
    <div>
      <p>Option Two:</p>
      <Progress percent={44} progress />
    </div>
  </Card.Content>
);

const NotOpenedStatus = (props) => (
  <Card.Content>
    <Button color="teal">View Question</Button>
  </Card.Content>
);
class QuestionDetail extends Component {
  render() {
    return <AnsweredStatus />;
  }
}

export default QuestionDetail;
