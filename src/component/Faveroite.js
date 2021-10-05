import axios from "axios";
import React, { Component } from "react";
import CardFav from "./CardFav";
import FormUpdate from "./FormUpdate";
export class Faveroite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favData: [],
      showFavData: false,
      slug: "",
      toUSD: "",
      description: "",
      image_url: "",
      showFormupdate: false,
    };
  }
  componentDidMount = async (req, res) => {
    const getfavreq = await axios.get(
      `https://exam401app.herokuapp.com/getpostexam`
    );
    this.setState({
      favData: getfavreq.data,
      showFavData: true,
    });
  };
  deleteFromFav = async (slug) => {
    const deletereq = await axios.delete(
      `https://exam401app.herokuapp.com/deleteexam${slug}`
    );
    this.setState({
      favData: deletereq.data,
    });
  };
  changeDes = (e) => {
    this.setState({ description: e.target.value });
  };
  changeUSD = (e) => {
    this.setState({ toUSD: e.target.value });
  };
  changeImage = (e) => {
    this.setState({ image_url: e.target.value });
  };

  updateClick = (slug, toUSD, description, image_url) => {
    this.setState({
      slug: slug,
      toUSD: toUSD,
      description: description,
      image_url: image_url,
      showFormupdate: true,
    });
  };
  updatedata = async (e) => {
    e.preventDefault();
    let data = {
      Name: this.state.image_url,
      description: this.state.description,
      toUSD: this.state.toUSD,
    };
    const updatereq = await axios.put(
      `https://exam401app.herokuapp.com/updateexam${this.state.slug}`,
      data
    );
    this.setState({
      favData: updatereq.data,
    });
  };
  render() {
    return (
      <div>
        {this.state.showFormupdate && (
          <FormUpdate
            toUSD={this.state.toUSD}
            description={this.state.description}
            image_url={this.state.image_url}
            changeUSD={this.changeUSD}
            changeImage={this.changeImage}
            changeDes={this.changeDes}
            updatedata={this.updatedata}
          />
        )}
        {this.state.showFavData && (
          <CardFav
            favData={this.state.favData}
            deleteFromFav={this.deleteFromFav}
            updateClick={this.updateClick}
          />
        )}
      </div>
    );
  }
}

export default Faveroite;
