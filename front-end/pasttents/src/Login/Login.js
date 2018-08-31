import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, NavItem, Form, FormGroup, Label, Input } from 'reactstrap';
class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <NavItem>
          <Button color="link" onClick={this.toggle}>Login</Button>
        </NavItem>
        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 400 }} backdropTransition={{ timeout: 700 }}
          toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.props.handleSubmit} inline>
              <FormGroup>
                <Label for="exampleEmail" hidden>username</Label>
                <Input type="text" name="username" id="exampleEmail" onChange={this.props.handleChange} placeholder="Username" />
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="examplePassword" hidden>Password</Label>
                <Input type="password" name="password" id="examplePassword" onChange={this.props.handleChange} placeholder="Password" />
              </FormGroup>
              {' '}
              <Button type="submit" onClick={this.toggle}>Login</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default Login;
