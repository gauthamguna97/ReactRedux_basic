import { connect } from "react-redux"
import React, { Component, useState } from "react"
import { addToTop } from "../../Redux/actions";

const Menu  = (props) => {
  const { topData = {}, globalData} = props;
  // console.log('UserData', globalData);
  const addClass = (e, val, item) => {
    if (val) {
      document.getElementById('companyName').classList.add('activ');
    } else {
      document.getElementById('companyName').classList.remove('activ');
      if (item) {
        props.addToTopFn(item);
      }
    }
    e.stopPropagation();
  }
  return (
    <div
      className="nav__menu-item"
      id="companyName"
      onMouseOver={(e) => addClass(e, 'activ')}
      onMouseOut={(e) => addClass(e, false)}
    >
      {topData.name} <span style={{ color: "#740070", fontWeight: '800', fontSize: '14px'}}>v</span>
      <div className="nav__submenu" style={{ height: '70vh', overflowY: 'scroll', width: 'inherit'}}>
        {globalData.map((item, index) => (
          <div className="nav__submenu-item" style={{ padding: '5px'}} onClick={(e) => addClass(e,false, item)}>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addToTopFn: (value) => dispatch(addToTop(value)),
});


const mapStateToProps = (state) => {
  return {
    topData: state.main.TopData,
    globalData: state.main.globalData,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu)