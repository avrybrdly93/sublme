import React, { Component } from "react";
import TeamCard from "../TeamCard/TeamCard";
import VideoList from "../../Videos.json";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";
import "./style.css";

const team = [
  {
    id: 0,
    name: "Avery Bradley",
    title: "Team Lead",
    avi: "/assets/images/profiles/avery1.png",
    image: "/assets/images/profiles/avery.jpg",
    link: "http://google.com",
    about:
      "My name is Avery, but you can call me Senpai. Welcome to my coding dojo.",
    desc:
      "As team lead, I closely worked with our front and back-end leads to build a strategy for the development of Sublme. The three of us assigned tasks to various teammates based on their strengths. I also created the task board on github to ensure that we were making good progress. \nIn addition to this, I developed both the front and back-ends of the like and comment features, the dynamic rendering of the song cards, and assisting teammates with issues."
  },
  {
    id: 1,
    name: "Javier Ventura",
    title: "Back-end Lead",
    avi: "/assets/images/profiles/javier1.png",
    image: "/assets/images/profiles/javier.jpg",
    link: "https://jventura10.github.io/portfolio/",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc:
      "As back-end lead, I worked on authentication, back-end routing and database models. I also helped connecting front-end to back-end, compiling each team members tasks together to bring an complete and polished product."
  },
  {
    id: 2,
    name: "Kasey Fillpot",
    title: "Back-end",
    avi: "/assets/images/profiles/kasey1.jpg",
    image: "/assets/images/profiles/kasey.jpg",
    link: "https://github.com/kfillpot",
    about:
      "Hi! I'm Kasey Fillpot, a full-stack developer from Southern California.",
    desc:
      "My main objective for this application was working closely with leads to complete auto-suggestions within the search bar, spot and debug discrepancies, and assist in creating Sublme's 'results' page. Working on this application solidified my knowledge of React & JavaScript."
  },
  {
    id: 3,
    name: "Lidia Davidson",
    title: "Back-end",
    avi: "/assets/images/profiles/lidia1.png",
    image: "/assets/images/profiles/lidia.jpg",
    link: "http://google.com",
    about:
      "Passionate about turning ideas into projects and explore new places I have never been before to.",
    desc:
      "I worked on the profile/settings page, where a user has an option to change information in their profile. I also worked with third-party API's to dynamically rendering information about different artists on our page. Scanned the application for bugs & helped with various debugging tasks along the project."
  },
  {
    id: 4,
    name: "Charles Duncan",
    title: "Front-end Lead",
    avi: "/assets/images/profiles/charles1.png",
    image: "/assets/images/profiles/charles.jpg",
    link: "http://charlesthinks.github.io/portfolio",
    about: "Hey there, I am a detail-orientated Front-End & UI/UX Developer.",
    desc:
      "As front-end lead, I worked on creating the prototype design, user flow of the site and components. Focused on making a one of a kind user experience, I built the dashboard, profile, and upload pages. As well as, helped teammates debug some issues."
  },
  {
    id: 5,
    name: "Jazmin Torres",
    title: "Front-end",
    avi: "/assets/images/profiles/jazmin1.png",
    image: "/assets/images/profiles/jazmin.jpg",
    link: "http://google.com",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis debitis nulla iusto deleniti, eos possimus cum quas quos, aliquam ipsum autem nam distinctio quasi tempora voluptates nihil nostrum excepturi."
  },
  {
    id: 6,
    name: "Ian Campbell",
    title: "Front-end",
    avi: "/assets/images/profiles/ian1.png",
    image: "/assets/images/profiles/ian.jpg",
    link: "https://www.linkedin.com/in/ian-campbell-602437170/",
    about:
      "Hello my name is Ian Campbell and I enjoy reading, music and games.",
    desc:
      "On this project I worked on ensuring that upon login the user gets new information and access to new elements that were previously hidden. I also ensured that upon logging out those same features were hidden my about me is terrible"
  }
];

class VideosList extends Component {
  state = {
    videos: VideoList
  };
  render() {
    var renderCards = team.map(member => (
      <TeamCard
        key={member.id}
        avi={member.avi}
        name={member.name}
        title={member.title}
        image={member.image}
        about={member.about}
        desc={member.desc}
        link={member.link}
      />
    ));
    return (
      <React.Fragment>
        <div className="container">
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex="-1"
            data-uk-slider="sets: true">
            <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid-small">
              {renderCards}
            </ul>

            <a
              className="uk-position-center-left uk-position-small"
              href="/"
              data-uk-slidenav-previous
              data-uk-slider-item="previous">
              <i className="material-icons md-48">keyboard_arrow_left</i>
            </a>
            <a
              className="uk-position-center-right uk-position-small"
              href="/"
              data-uk-slidenav-next
              data-uk-slider-item="next">
              <i className="material-icons md-48">keyboard_arrow_right</i>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default VideosList;
