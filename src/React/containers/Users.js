import React from "react";
import { connect } from "react-redux";

const SideMenu = (props) => {
  const { data = [], show, selectedIndex } = props;
  return (
    <div>calendar</div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state.activedata)
  return {
    active : state.activedata
  };
}

export default connect(mapStateToProps)(SideMenu);