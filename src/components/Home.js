import React from "react";
import { Container, Tab } from "semantic-ui-react";
import MainCard from "./MainCard";

const panes = [
  {
    menuItem: "Unanswered Questions",
    render: () => (
      <Tab.Pane attached={false}>
        <MainCard />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Answered Questions",
    render: () => (
      <Tab.Pane attached={false}>
        <MainCard />
      </Tab.Pane>
    ),
  },
];

class Home extends React.Component {
  render() {
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
          panes={panes}
        />
      </Container>
    );
  }
}

export default Home;
