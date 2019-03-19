import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";

class Profile extends Component {
    componentDidMount(){
        dbAPI.findUser(this.props.match.params.id).then(response=>{
            console.log(response.data);
        }).catch(err=>{
            console.log(err);
        });
    }

    render(){
        return (
            <h1>Profile Page</h1>
        );
    }
}

export default Profile;