    import React, { Component } from 'react';&#xD;&#xA;    import { Input, Form, Button } from 'semantic-ui-react'&#xD;&#xA;    class LoginForm extends Component {&#xD;&#xA;      state = { username: '', password: '' }&#xD;&#xA;      handleChange = (e, { name, value }) => this.setState({ [name]: value })&#xD;&#xA;      handleSignIn(e) {&#xD;&#xA;        e.preventDefault()&#xD;&#xA;        this.props.onSignIn(this.username, this.password)&#xD;&#xA;      }&#xD;&#xA;      render() {&#xD;&#xA;        const { username, password } = this.state&#xD;&#xA;        return (&#xD;&#xA;          <div className="login-container">&#xD;&#xA;            <Form onSubmit={this.handleSignIn.bind(this)}>&#xD;&#xA;              <Form.Field>&#xD;&#xA;                <Input icon="user" iconPosition="left" placeholder="Username" type="text" ref="username" onChange={this.handleChange}/>&#xD;&#xA;              </Form.Field>&#xD;&#xA;              <Form.Field>&#xD;&#xA;                <Input icon="user secret" iconPosition="left" placeholder="Password" type="password" ref="password" onChange={this.handleChange}/>&#xD;&#xA;              </Form.Field>&#xD;&#xA;              <Form.Field>&#xD;&#xA;                <Button type="submit" className="inputSpacing" color="yellow"><Icon name='lock' />Login</Button>&#xD;&#xA;              </Form.Field>&#xD;&#xA;            </Form>&#xD;&#xA;          </div>&#xD;&#xA;        );&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    export default LoginForm;