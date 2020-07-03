import React, { Component } from "react";
import { connect } from "react-redux";

class ActiveVertical extends Component {
  render() {
    if (!this.props.active) {
      return <div> Select one to continue </div>;
    }

    return (
      <div>
        <div>{this.props.active.experience}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.activedata)
  return {
    active : state.activedata
  };
}

export default connect(mapStateToProps)(ActiveVertical);
