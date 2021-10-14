import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import QuestionDetail from "./QuestionDetail";

class MainCard extends Component {
  render() {
    return (
      <Card
        style={{
          width: "80%",
        }}
        centered
      >
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Card.Header>Steve Sanders Asks:</Card.Header>
          <Card.Description>question ...</Card.Description>
        </Card.Content>
        <QuestionDetail />
      </Card>
    );
  }
}

export default MainCard;
