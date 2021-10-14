import React, { Component } from "react";
import {
  Segment,
  Grid,
  Header,
  Image,
  Label,
  Divider,
  Container,
} from "semantic-ui-react";

export default class Leaderboard extends Component {
  render() {
    return (
      <Container>
        <Segment.Group size="small">
          <Grid divided padded centered>
            <Grid.Row>
              <Grid.Column width={4} verticalAlign="middle">
                <Image />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as="h3" textAlign="left">
                  "Test"
                </Header>
                <Grid>
                  <Grid.Column width={12}>Answered questions</Grid.Column>
                  <Grid.Column width={4}>5</Grid.Column>
                </Grid>
                <Divider />
                <Grid>
                  <Grid.Column width={12}>Created questions</Grid.Column>
                  <Grid.Column width={4}>2</Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column width={4} textAlign="center">
                <Segment.Group>
                  <Header as="h5" block attached="top" content="Score" />
                  <Segment>
                    <Label circular color="green" size="big">
                      7
                    </Label>
                  </Segment>
                </Segment.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment.Group>
      </Container>
    );
  }
}
