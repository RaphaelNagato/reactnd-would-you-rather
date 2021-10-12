import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authUser";

class LoginForm extends React.Component {
  state = {
    selectedUser: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { selectedUser } = this.state;
    dispatch(setAuthUser(selectedUser));
  };

  generateUsersForDropdown = () => {
    const { users } = this.props;

    return users.map((user) => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { src: user.avatarURL, avatar: true },
    }));
  };

  handleChange = (e, { value }) => {
    console.log(value);
    this.setState(() => ({
      selectedUser: value,
    }));
  };

  render() {
    const { selectedUser } = this.state;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 500 }}>
          <Header as="h2" color="teal" textAlign="center">
            Welcome to Nagato's Would you rather App
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Dropdown
                placeholder="Select User To Login"
                fluid
                selection
                options={this.generateUsersForDropdown()}
                value={selectedUser}
                onChange={this.handleChange}
              />
              <Button
                color="teal"
                fluid
                size="large"
                disabled={selectedUser === ""}
                onClick={this.handleSubmit}
              >
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default connect(mapStateToProps)(LoginForm);
