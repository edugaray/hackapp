import React, { Component } from "react";
import { Link } from "react-router-dom";

class SuccessPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="successText">
          <h1>WOW!</h1>
          <h1>You Did it!</h1>
          <h1>Great Job!</h1>
        </div>

        <button className="welcome-button">
          <Link to="/image-game">Try another one!</Link>
        </button>
      </div>
    );
  }
}

export default SuccessPage;
