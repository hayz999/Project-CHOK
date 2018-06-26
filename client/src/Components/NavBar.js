import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { Checkbox, Form } from "semantic-ui-react";
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    
    return <Segment className="nav-bar" inverted>
        <Menu inverted secondary>
          <Modal closeIcon trigger={<button className="ui button" role="button">
                Sign Up
              </button>}>
            <Modal.Header>Sign Up</Modal.Header>
            <Modal.Content image >
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label>First Name</label>
                    <input placeholder="First Name" />
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
                    <input placeholder="Last Name" />
                  </Form.Field>
                  <Form.Field>
                    <label>E-mail</label>
                    <input placeholder="E-mail" />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input placeholder="Password" />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox label="I agree to the Terms and Conditions" />
                  </Form.Field>
                  <Link to='/newProfile'><Button type="submit">Submit</Button></Link>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          <Modal closeIcon trigger={<button className="ui button" role="button">
                Login
              </button>}>
            <Modal.Header>Login</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label>E-mail</label>
                    <input placeholder="E-mail" />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input placeholder="Password" />
                  </Form.Field>
                  <Link to='/profile'><Button type="submit">Submit</Button></Link>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Menu>
        <img className="main-logo" src="./assets/bettership.png" alt="logo" />
      </Segment>;
  }
}
