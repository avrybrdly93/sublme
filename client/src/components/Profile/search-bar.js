import React from "react";
import "./profile.css";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  handleChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search">
        <form
          onSubmit={this.handleSubmit}
          className="uk-search uk-search-default"
        >
          <div class="right-inner-addon">
            <i class="icon-search" />
            <label htmlFor="video-search" />

            <input
              class="uk-search-input"
              onChange={this.handleChange}
              name="video-search"
              type="search"
              value={this.state.term}
              placeholder="What are you looking for?"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
