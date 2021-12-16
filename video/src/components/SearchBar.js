import React from "react";
class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) =>{
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment" style={{ marginTop: 10 }}>
        <form className="ui form" onSubmit = {this.onFormSubmit}>
          <div className="field">
            <label> Video Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
              placeholder="Search Here"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
