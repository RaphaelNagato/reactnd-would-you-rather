import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import AnsweredStatusDetail from "./AnsweredStatusDetail";
import { connect } from "react-redux";
import UnansweredQuestionDetail from "./UnansweredQuestionDetail";
class QuestionDetail extends Component {
  render() {
    const { match, answeredQuestionsIds } = this.props;
    const isAnswered = answeredQuestionsIds.includes(match.params.question_id);
    return (
      <Container centered="true">
        {isAnswered ? (
          <AnsweredStatusDetail id={match.params.question_id} />
        ) : (
          <UnansweredQuestionDetail id={match.params.question_id} />
        )}
      </Container>
    );
  }
}

function mapStateToProps({ authUser, users }) {
  const answeredQuestionsIds = Object.keys(users[authUser].answers);

  return {
    answeredQuestionsIds,
  };
}

export default connect(mapStateToProps)(QuestionDetail);
