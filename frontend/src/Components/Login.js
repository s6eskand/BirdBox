import React from 'react';
import { Button, Form } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            display: 'none',
        };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleUserChange = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/auth/login', {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                console.log(res);
                this.setState({
                    display: 'none'
                })
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    display: ''
                })
            });

    };

    render() {

        console.log(this.state);
        return(
            <div id="createAccount" className="register-form">
                <Form>
                    <Form.Field>
                      <label>User Name</label>
                      <Form.Input
                          type="text"
                          placeholder='Username...'
                          value={this.state.username}
                          onChange={this.handleUserChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Password</label>
                      <Form.Input
                          type="password"
                          placeholder='Password'
                          value={this.state.password}
                          onChange={this.handlePasswordChange}
                      />
                    </Form.Field>
                    <p style={{display: this.state.display, color: '#D7373D'}}>Your username or password are incorrect</p>
                    <p>Already have an account? <Link to="login">Log in here</Link></p>
                    <Button primary type='submit' onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default Login;