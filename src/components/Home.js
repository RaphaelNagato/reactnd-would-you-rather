import React from "react";
import { connect } from "react-redux";
import { Container, Tab } from "semantic-ui-react";
import MainCard from "./MainCard";

const panes = ({ answeredQuestionsIds, unansweredQuestionsIds }) => [
  {
    menuItem: "Unanswered Questions",
    render: () => (
      <Tab.Pane attached={false}>
        <MainCard kind={"unanswered"} questionsIds={unansweredQuestionsIds} />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Answered Questions",
    render: () => (
      <Tab.Pane attached={false}>
        <MainCard kind={"answered"} questionsIds={answeredQuestionsIds} />
      </Tab.Pane>
    ),
  },
];

class Home extends React.Component {
  render() {
    const { answeredQuestionsIds, unansweredQuestionsIds } = this.props;
    return (
      <Container
        textAlign="center"
        style={{ width: "50vw", paddingTop: "3em" }}
      >
        <Tab
          menu={{
            style: {
              display: "flex",
              justifyContent: "center",
            },
            secondary: true,
            color: "teal",
          }}
          panes={panes({ answeredQuestionsIds, unansweredQuestionsIds })}
        />
      </Container>
    );
  }
}

function mapStateToProps({ users, questions, authUser }) {
  const answeredQuestionsIds = Object.keys(users[authUser].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const unansweredQuestionsIds = Object.keys(questions)
    .filter((q) => !answeredQuestionsIds.includes(q))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredQuestionsIds,
    unansweredQuestionsIds,
  };
}

export default connect(mapStateToProps)(Home);
