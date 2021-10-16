import React from "react";
import { Link } from "react-router-dom";
import { Grid, Header, Button } from "semantic-ui-react";

const NotFound = () => {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 500 }}>
        <Header as="h2" color="teal" textAlign="center">
          Welcome to Nagato's Would you rather App
        </Header>
        <h3>
          404, page not found <span>&#128169;</span>
        </h3>
        <Button as={Link} to="/" color="teal" fluid size="large">
          Go to Home
        </Button>
      </Grid.Column>
    </Grid>
  );
};

export default NotFound;
