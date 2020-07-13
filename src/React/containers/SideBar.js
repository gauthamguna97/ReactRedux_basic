import React, { useState } from "react";
import { connect } from "react-redux";
import { showSideMenu } from "../../Redux/actions";
import './sidebar.css';

const SideMenu = (props) => {
  const { data = [], activIndex = 0 } = props;
  const shosdmn = (val) => {
    props.showSideMenuFn(val);
  }
  return (
    <div className="sidemenu">
        <div className="sideheading" onClick={() => props.setSelectedIndex(index)}>
          <div>MYJU'S</div>
        </div>
        {data.map((item, index) => (
          <div className={index === activIndex ? 'sidewrp activ' : 'sidewrp'} onClick={() => props.setSelectedIndex(index)}>
            <div className="imgwrp"> 
              <img src={index === activIndex ? item.actImg : item.img} />
            </div>
          </div>
        ))}
        <div className="dragger" onClick={() => shosdmn(true)}><img src="https://img.icons8.com/color/2x/more-than.png"></img></div>
    </div>
  );
}


export default connect(null, null)(SideMenu);