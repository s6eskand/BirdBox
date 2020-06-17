import React from 'react';
import { Button, Form } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import axios from 'axios';

// constants
import {
    LOGIN_ENDPOINT
} from "../constants/endpoints";


// redux
import {
    loginTokenSelector,
    loginAuthSelector,
} from "../redux/selectors/auth";
import {
    login,
} from "../redux/actions/auth";
import withShipment from "../withShipment";

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

        axios.post(LOGIN_ENDPOINT, {
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                this.props.login(res.data.token);
                this.props.history.push('/');
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    display: ''
                })
            });

    };

    render() {
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
                    <p>Don't have an account? <Link to="/register">Create one here</Link></p>
                    <Button primary type='submit' onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    token: loginTokenSelector(state),
    isAuthenticated: loginAuthSelector(state)
});

const actionCreators = {
    login,
};

export default withShipment({
    mapStateToProps,
    actionCreators
}, Login);