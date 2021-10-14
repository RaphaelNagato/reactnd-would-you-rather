import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";

class MainCard extends Component {
  render() {
    const { questions, kind, questionsIds, users } = this.props;
    return questionsIds ? (
      questionsIds.map((qId) => (
        <Card
          style={{
            width: "80%",
          }}
          centered
          key={qId}
        >
          <Card.Content>
            <Image
              src={users[questions[qId].author].avatarURL}
              rounded
              fluid
              width="30"
              height="30"
            />
            <Card.Header
              style={{
                paddingTop: "2em",
              }}
            >
              {kind === "unanswered"
                ? users[questions[qId].author].name + " Asks"
                : "Asked by " + users[questions[qId].author].name}
            </Card.Header>
            <Card.Description>
              {questions[qId].optionOne.text.substring(0, 20)}...
            </Card.Description>
          </Card.Content>
          <Card.Content as={Link} to={`/questions/${qId}`}>
            <Button color="teal">View Question</Button>
          </Card.Content>
        </Card>
      ))
    ) : (
      <p>No data to display here</p>
    );
  }
}

function mapStateToProps({ questions, users }, { kind, questionsIds }) {
  return {
    questions,
    kind,
    questionsIds,
    users,
  };
}

export default connect(mapStateToProps)(MainCard);
