import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Image } from "semantic-ui-react";
import { setAuthUser } from "../actions/authUser";

class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleLogout = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setAuthUser(null));
  };

  render() {
    const { activeItem } = this.state;
    const { users, authUser } = this.props;

    return (
      <div>
        <Menu pointing color="teal" stackable>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="new question"
            active={activeItem === "new question"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="leaderboard"
            active={activeItem === "leaderboard"}
            onClick={this.handleItemClick}
          />
          {authUser && (
            <Menu.Menu position="right">
              <Menu.Item>
                <span>
                  <Image src={users[authUser].avatarURL} avatar />
                  {users[authUser].name}
                </span>
              </Menu.Item>
              <Menu.Item
                name="logout"
                active={activeItem === "logout"}
                onClick={this.handleLogout}
              ></Menu.Item>
            </Menu.Menu>
          )}
        </Menu>
      </div>
    );
  }
}

function mapStateToProps({ users, authUser }) {
  return {
    users,
    authUser,
  };
}
export default connect(mapStateToProps)(NavBar);
