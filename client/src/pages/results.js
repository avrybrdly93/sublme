import React, { Component } from "react";
import axios from "axios";

class Result extends Component {
    componentDidMount(){
        axios.get("/api/music/search/"+this.props.match.params.term).then(response=>{
            console.log(response.data);
        });
    }

    render(){
        return (
            <h1>Results Page!</h1>
        );
    }
}

export default Result;