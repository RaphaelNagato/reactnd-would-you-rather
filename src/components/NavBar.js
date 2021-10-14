import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Image } from "semantic-ui-react";
import { setAuthUser } from "../actions/authUser";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) =>
    this.setState(() => ({
      activeItem: name,
    }));

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
            as={NavLink}
            to="/"
            name="home"
            exact
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/add"
            exact
            name="new question"
            active={activeItem === "new question"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/leaderboard"
            exact
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
