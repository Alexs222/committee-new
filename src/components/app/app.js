import React, { Component } from "react";
import MainPage from "../main-page";

import "../../layout/_layout.scss";
import "./app.scss";

export default class App extends Component {

  render() {

    return (
      <div className="container">
        <MainPage />
      </div>
    );
  }
}
