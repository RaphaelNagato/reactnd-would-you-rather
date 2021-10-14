import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Form, Radio, Header, Grid, Image } from "semantic-ui-react";
import { handleAddAnswerToQuestionAndUser } from "../actions/questions";

class UnansweredQuestionDetail extends Component {
  state = {
    selectedOption: "",
  };
  handleChange = (e, { value }) => this.setState({ selectedOption: value });

  handleSubmit = (e, id, selectedOption) => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(handleAddAnswerToQuestionAndUser(id, selectedOption));
  };

  render() {
    const { selectedOption } = this.state;
    const { question, authorAvatar } = this.props;
    const { id, optionOne, optionTwo } = question;
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
              <Card.Content>
                <Form>
                  <Form.Field>
                    <Radio
                      label={optionOne.text}
                      name="radioGroup"
                      value="optionOne"
                      checked={this.state.selectedOption === "optionOne"}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label={optionTwo.text}
                      name="radioGroup"
                      value="optionTwo"
                      checked={this.state.selectedOption === "optionTwo"}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Button
                    color="teal"
                    disabled={selectedOption === ""}
                    onClick={(e) => this.handleSubmit(e, id, selectedOption)}
                  >
                    Choose
                  </Form.Button>
                </Form>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  const authorAvatar = users[question.author].avatarURL;

  return {
    question,
    authorAvatar,
  };
}

export default connect(mapStateToProps)(UnansweredQuestionDetail);
