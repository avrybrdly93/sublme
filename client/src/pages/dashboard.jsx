import React from "react";
import Typography from "@material-ui/core/Typography";
import MediaGridList from "../components/MediaGridList/MediaGridList";
import ProfileGridList from "../components/ProfileGridList/ProfileGridList";
import MediaPlayer from "../components/MediaPlayer/MediaPlayer";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="col-12">
        <Typography
          component="h2"
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "250%",
            fontWeight: 100
          }}>
          More of what you want...
        </Typography>
        <Typography
          component="h2"
          variant="headline"
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "100%",
            fontWeight: 100,
            paddingBottom: 10
          }}
          gutterBottom>
          Swipe thru the most popular tracks out now!
        </Typography>
        <MediaGridList />
        <br />
        <Typography
          component="h2"
          variant="display4"
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "100%",
            fontWeight: 100,
            paddingBottom: 10
          }}
          gutterBottom>
          Upcoming Artists & Producers
        </Typography>
        <ProfileGridList />
        <br />
        <br />
      </div>
      <MediaPlayer />
    </React.Fragment>
  );
};

export default Dashboard;
