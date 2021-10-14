import React, { Component } from "react";
import { Card, Progress, Grid, Image, Header, Label } from "semantic-ui-react";
import { connect } from "react-redux";

const VoteLabel = () => {
  return (
    <Label color="orange" ribbon="right" size="large">
      Your vote
    </Label>
  );
};

class AnsweredStatusDetail extends Component {
  render() {
    const { question, authorAvatar, authUserVote } = this.props;
    const { optionOne, optionTwo } = question;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    const optionOneVotesPercentage = Math.round(
      (optionOne.votes.length / totalVotes) * 100
    );
    const optionTwoVotesPercentage = Math.round(
      (optionTwo.votes.length / totalVotes) * 100
    );
    return (
      <Grid
        celled
        style={{
          marginTop: "5em",
          width: "60%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        centered
      >
        <Grid.Row>
          <Grid.Column width={4}>
            <Image src={authorAvatar} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as={"h3"}>Would you Rather...</Header>
            <Card>
              {authUserVote === "optionOne" && <VoteLabel />}
              <Card.Content>
                <div>
                  <p>Option One:</p>
                  <p>{optionOne.text}</p>
                  <Progress
                    color="teal"
                    percent={optionOneVotesPercentage}
                    progress
                  />
                  <p>
                    {optionOne.votes.length} out of {totalVotes} votes
                  </p>
                </div>
              </Card.Content>
            </Card>
            <Card>
              {authUserVote === "optionTwo" && <VoteLabel />}
              <Card.Content>
                <div>
                  <p>Option Two:</p>
                  <p>{optionTwo.text}</p>
                  <Progress
                    color="teal"
                    percent={optionTwoVotesPercentage}
                    progress
                  />
                  <p>
                    {optionTwo.votes.length} out of {totalVotes} votes
                  </p>
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ questions, users, authUser }, { id }) {
  const question = questions[id];
  const authorAvatar = users[question.author].avatarURL;
  const authUserVote = users[authUser].answers[question.id];

  return {
    question,
    authorAvatar,
    authUserVote,
  };
}
export default connect(mapStateToProps)(AnsweredStatusDetail);
