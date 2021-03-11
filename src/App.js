import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import axios from "axios";
import ImageList from "./components/ImageList/ImageList";

class App extends Component {
  state = { images: [] };
  // event handler
  OnSearchSubmit = async term => {
    //callback function
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID IP8CvBABJzJPDrE0pRrgs0EV0AEKw0KSHtYle0csd5E",
      },
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });

    // axios
    //   .get("https://api.unsplash.com/search/photos", {
    //     params: { query: term },
    //     headers: {
    //       Authorization:
    //         "Client-ID IP8CvBABJzJPDrE0pRrgs0EV0AEKw0KSHtYle0csd5E",
    //     },
    //   })
    //   .then(response => {
    //     console.log(response.data.results);
    //   });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.OnSearchSubmit} />
        <div className="note">- found {this.state.images.length} images -</div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
