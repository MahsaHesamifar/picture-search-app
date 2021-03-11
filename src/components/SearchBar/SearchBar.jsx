import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = { searchTerm: "" };
  // event handler
  //   onInputClick = () => {
  //     console.log('clicked')
  //   };
  onInputChange = e => {
    // console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
  };
  onFormSubmit = e => {
    // to prevent default refreshing the page
    e.preventDefault();
    // here 'onSubmit' is a prop... view App.js
    this.props.onSubmit(this.state.searchTerm);
    // after user enters the search term, the value changes to ""
    this.setState({ searchTerm: "" });
  };
  render() {
    return (
      <div className="searchbar-container">
        <form action="" className="search-form" onSubmit={this.onFormSubmit}>
          <label htmlFor="inpt" className="label-field">
            Search For Pictures:
          </label>
          <input
            className="input-field"
            type="text"
            value={this.state.searchTerm}
            //  onClick={this.onInputClick}
            //  onChange={this.onInputChange}
            onChange={e => this.setState({ searchTerm: e.target.value })}
            placeholder="search here "
            name="inpt"
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
