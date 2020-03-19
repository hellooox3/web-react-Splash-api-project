import React from "react";
// import "./styles.css";
// import axios from "axios";
import Unsplash from ".//api/Unsplash";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
// import { render } from "react-dom";

// export default function App() {
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: term }
    });
    // .then(response => {
    //   console.log(response);
    // });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      // <div className="App">
      //   <h1>Hello CodeSandbox</h1>
      //   <h2>Start editing to see some magic happen!</h2>
      // </div>
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
