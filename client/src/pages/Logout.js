import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

class Logout extends Component {

    componentDidMount() {
        Cookies.remove("key");
        Cookies.remove("username");
        Cookies.remove("user_id");
        axios.get("/api/users/user/logout").then(response => {
            console(response);
        }); 
    }

    render() {
        return (
            <Redirect to="/" />
        );
    }
};

export default Logout;
