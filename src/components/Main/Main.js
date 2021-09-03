import React from "react";
import "./Main.css";
import PostFrame from "./PostFrame/PostFrame";

class Main extends React.Component {
  render() {
    return <div className="main">
      <PostFrame />
    </div>;
  }
}

export default Main;
