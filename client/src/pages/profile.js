import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";
// /import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
//import Button from "@material-ui/core/Button";
//import AppBar from "@material-ui/core/AppBar";

const styles = theme => ({
    bigAvatar: {
        margin: 10,
        width: 200,
        height: 200,

        button: {
            margin: theme.spacing.unit
        },
        root: {
            flexGrow: 1
        },

        input: {
            display: "center"
        }
    }
});

class Profile extends Component {
    state = {
        username: "",
        firstName: "",
        lastName: "",
        userType: "",
        bio: "",
        gender: "",
        birthday: "",
        profileImg: "",
        bgImg: "",
    };

    componentDidMount() {
        dbAPI.findUser(this.props.match.params.id).then(response => {
            console.log(response.data);
            this.setState({
                username: response.data.username,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                userType: response.data.userType,
                bio: response.data.bioStatement,
                gender: response.data.gender,
                birthday: response.data.birthday,
                profileImg: response.data.profileImage,
                bgImg: response.data.backgroundImage
            });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="col-12">
                <Grid container justify="center" alignItems="center">
                    <Avatar
                        alt="Picture"
                        src={this.state.profileImg}
                        className={this.props.classes.bigAvatar}
                    />
                </Grid>
                <div className={this.props.classes.container}>
                <CardContent container justify="center" alignItems="center">
                    <Typography gutterBottom variant="h5" component="h2">
                        Profile
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        @{this.state.username}
                    </Typography>
                    <Typography component="p">
                        {this.state.bio}
                    </Typography>

                </CardContent>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Profile);