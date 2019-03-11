import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form.js";
import dbAPI from "../utils/dbAPI";

class Login extends Component {
    state={
        loggedIn: false,
        username: "",
        password: "",
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        dbAPI.loginUser({
            username: this.state.username,
            password: this.state.password
        }).then(response=> {   
            console.log(response);
        }).catch(err=>console.log(err));
    };

    render(){
        return (
            <div>
                <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="Enter Username (required)"
                />
                <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="Enter Password (required)"
                    type="password"
                />
                <FormBtn onClick={this.handleFormSubmit}>
                    Submit Book
                </FormBtn>
            </div>
        );
    }
}

export default Login;