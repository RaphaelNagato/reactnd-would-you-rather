import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container } from "semantic-ui-react";
import AnsweredStatusDetail from "./AnsweredStatusDetail";
import { connect } from "react-redux";
import UnansweredQuestionDetail from "./UnansweredQuestionDetail";
class QuestionDetail extends Component {
  render() {
    const { match, answeredQuestionsIds, questions } = this.props;
    const isAnswered = answeredQuestionsIds.includes(match.params.question_id);
    if (!questions[match.params.question_id]) return <Redirect to="/404" />;
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

function mapStateToProps({ authUser, users, questions }) {
  const answeredQuestionsIds = Object.keys(users[authUser].answers);

  return {
    answeredQuestionsIds,
    questions,
  };
}

export default connect(mapStateToProps)(QuestionDetail);
