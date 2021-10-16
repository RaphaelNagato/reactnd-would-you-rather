import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Segment,
  Grid,
  Header,
  Image,
  Label,
  Divider,
  Container,
} from "semantic-ui-react";

class Leaderboard extends Component {
  render() {
    const { users, sortedUserIDs } = this.props;
    return (
      <Container fluid style={{ marginTop: "2em", textAlign: "center" }}>
        <Header as="h2">Leaderboard</Header>
        {sortedUserIDs.map((id) => (
          <Segment.Group size="small" key={id}>
            <Grid divided padded centered>
              <Grid.Row>
                <Grid.Column width={4} verticalAlign="middle">
                  <Image size="small" src={users[id].avatarURL} />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h3" textAlign="left">
                    {users[id].name}
                  </Header>
                  <Grid>
                    <Grid.Column width={12}>Answered questions</Grid.Column>
                    <Grid.Column width={4}>
                      {Object.keys(users[id].answers).length}
                    </Grid.Column>
                  </Grid>
                  <Divider />
                  <Grid>
                    <Grid.Column width={12}>Created questions</Grid.Column>
                    <Grid.Column width={4}>
                      {Object.keys(users[id].questions).length}
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
                <Grid.Column width={4} textAlign="center">
                  <Segment.Group>
                    <Header as="h5" block attached="top" content="Score" />
                    <Segment>
                      <Label circular color="green" size="big">
                        {Object.keys(users[id].answers).length +
                          Object.keys(users[id].questions).length}
                      </Label>
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment.Group>
        ))}
      </Container>
    );
  }
}

function mapStateToProps({ users }) {
  const sortedUserIDs = Object.keys(users).sort((aId, bId) => {
    const totalQuestionsForA =
      Object.keys(users[aId].answers).length + users[aId].questions.length;
    const totalQuestionsForB =
      Object.keys(users[bId].answers).length + users[bId].questions.length;

    return totalQuestionsForB - totalQuestionsForA;
  });

  return {
    sortedUserIDs,
    users,
  };
}

export default connect(mapStateToProps)(Leaderboard);
