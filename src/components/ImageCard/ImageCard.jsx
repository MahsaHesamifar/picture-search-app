import React from "react";

class ImageCard extends React.Component {
  state = { spans: 0 };
  imageRef = React.createRef();
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
    console.log(this.imageRef.current.clientHeight);
    // this.setSpan();
  }
  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 2);
    this.setState({ spans });
  };
  render() {
    const { urls, alt_description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={alt_description}></img>
      </div>
    );
  }
}

export default ImageCard;

//     <img alt={image.alt_description} src={image.urls.regular}></img>
