import React, { Component } from "react";
import "./styles.scss";
import {
  Container,
  Grid,
  Header,
  Form,
  Button,
  Divider,
  Icon
} from "semantic-ui-react";

class LoginPage extends Component {
  render() {
    return (
      <div className="login-container">
        <Grid centered>
          <Grid.Column computer={9} mobile={16} tablet={9}>
            <Container>
              <div>
                {/* <Header textAlign="center" as='h2'>Login</Header> */}
                <h2 style={{ textAlign: "center" }}>Login</h2>
                {/* <h2 className="text-center-align">Login</h2> */}
                <Form>
                  <Form.Field>
                    <label>E-Mail Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="type in your email"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      required
                      placeholder="type in your password"
                    />
                  </Form.Field>
                  <Form.Field style={{ textAlign: "center" }}>
                  {/* <Form.Field className="text-center-align"> */}
                    <Form.Field>
                      <Button color="orange">Login</Button>
                    </Form.Field>
                    <a href="">Reset your password</a>
                  </Form.Field>
                  <Divider horizontal>Or</Divider>
                  <div style={{ textAlign: "center" }}>
                  {/* <div className="text-center-align"> */}
                    <Button color="facebook" style={{ marginBottom: 10 }}>
                    {/* <Button color="facebook" className="btn-facebook"> */}
                      <Icon name="facebook" /> Login with Facebook
                    </Button>
                    <Button color="google plus">
                      <Icon name="google" /> Login with Google
                    </Button>
                  </div>
                </Form>
              </div>
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
