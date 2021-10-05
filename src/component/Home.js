import axios from "axios";
import React, { Component } from "react";
import CardApi from "./CardApi";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
    };
  }
  componentDidMount = async (req, res) => {
    const apireq = await axios.get(`https://exam401app.herokuapp.com/apiexam`);
    this.setState({
      apiData: apireq.data,
    });
  };
  addtofav = async (obj) => {
    await axios.post(`https://exam401app.herokuapp.com/postexam`, obj);
    console.log(obj);
  };
  render() {
    return (
      <div>
        <CardApi apiData={this.state.apiData} addtofav={this.addtofav} />
      </div>
    );
  }
}

export default Home;
