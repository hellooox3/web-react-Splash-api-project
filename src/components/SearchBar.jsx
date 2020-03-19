import React from "react";

class SearchBar extends React.Component {
  // constructor(props) {
  //   super();
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }
  state = { userInput: "" };

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // onFormSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state.userInput);
  // }

  onFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state.userInput);
    this.props.onSubmit(this.state.userInput);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Bar</label>
            {/* <input type="text" onChange={this.onInputChange} /> */}
            <input
              type="text"
              onChange={event => {
                this.setState({ userInput: event.target.value });
              }}
              value={this.state.userInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
