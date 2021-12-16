import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./imageList";
class App extends React.Component {
  state = { images: [] };
  onSearchSumbit = async (term) => {
    const response = await
     unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSumbit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
