import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./style.css";

//Using this to pull from last.fm api
// const { API_KEY } = process.env
// const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'
			 
class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };
  }

  // getInfo = () => {
  //   axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
  //     .then(({ data }) => {
  //       this.setState({
  //         results: data.data
  //       })
  //     })
  // }

  onChange = e => {
    e.preventDefault();
    const {name, value} = e.target;
    this.setState({[name] : value });
    axios.get("/api/music/search/"+this.state.userInput.toLowerCase())
    .then(response => {
      console.log(response.data);
      this.setState({
        activeSuggestion: response.data.length,
        filteredSuggestions: response.data,
        showSuggestions: true
      });
    }); 



    // const { suggestions } = this.props;
    // const userInput = e.currentTarget.value;


    // // Filter our suggestions that don't contain the user's input
    // const filteredSuggestions = suggestions.data.filter(
    //   suggestion =>
    //     suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1 
    // );

    // this.setState({
    //   activeSuggestion: 0,
    //   filteredSuggestions,
    //   showSuggestions: true,
    //   userInput: e.currentTarget.value
    // });
  };

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        // userInput: filteredSuggestions[activeSuggestion]
        userInput:
          filteredSuggestions[activeSuggestion].title +
          " - " +
          filteredSuggestions[activeSuggestion].artist
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      handleKeyPress,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion._id}
                  onClick={onClick}
                  onKeyPress={handleKeyPress}
                >
                {/* coverlinks currently pulling up undefined */}
                <div><img alt="cover" src= { suggestion.cover}></img>{suggestion.title} -{" "}
                  {suggestion.artistName}</div>
                  {/* {suggestion.cover} */}
                   
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <div className="contain-search">
        <input
          type="text"
          onChange={this.onChange}
          // onKeyDown={this.onKeyDown}
          // onKeyPress={this.handleKeyPress}
          value={this.state.userInput}
          name = "userInput"
          placeholder="Search"
        />
        {suggestionsListComponent}
        </div>
      </Fragment>
    );
  }
}

export default Autocomplete;