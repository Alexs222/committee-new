import React, { Component } from "react";
import Flag from "../flag";

import "./main-page.scss";

export default class MainPage extends Component {

  render() {

    return (
      <>
        <div className="page main-page"></div>
        <div className="main-page-layer"></div>
        <Flag />
      </>
      
      
    );
  }
}
