import React from 'react';
import { Button, Form } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import axios from 'axios';

// constants
import {
    REGISTER_ENDPOINT
} from "../../constants/endpoints";

// redux
import {
    registerTokenSelector,
    registerAuthSelector,
} from "../../redux/selectors/auth";
import {
    register
} from "../../redux/actions/auth";
import withShipment from "../../withShipment";

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password2: '',
            display: 'none',
            display2: 'none',
        };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleUserChange = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    handleConfirmPassword = (e) => {
        this.setState({
            password2: e.target.value,
        })
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        if (this.state.password === this.state.password2) {
            this.setState({
                display: 'none'
            });

            axios.post(REGISTER_ENDPOINT, {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
                .then(res => {
                    this.props.register(res.data.token);
                    this.props.history.push('/');
                })
                .catch(() => this.setState({display2: ''}));
        } else {
            this.setState({
                display: ''
            })
        }

    };

    render() {

        console.log(this.state);
        return(
            <div>
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
                          <label>Email</label>
                          <Form.Input
                              type="email"
                              placeholder='Email...'
                              value={this.state.email}
                              onChange={this.handleEmailChange}
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
                        <Form.Field>
                          <label>Confirmation Password</label>
                          <Form.Input
                              type="password"
                              placeholder='Re-enter your password'
                              value={this.state.password2}
                              onChange={this.handleConfirmPassword}
                          />
                        </Form.Field>
                        <p style={{display: this.state.display2, color: '#D7373D'}}>There was an issue creating your account. Please try again.</p>
                        <p style={{display: this.state.display, color: '#D7373D'}}>Your passwords do not match</p>
                        <p>Already have an account? <Link to="login">Log in here</Link></p>
                        <Button primary type='submit' onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    token: registerTokenSelector(state),
    isAuthenticated: registerAuthSelector(state)
});

const actionCreators = {
    register
};

export default withShipment({
    mapStateToProps,
    actionCreators
}, CreateAccount);