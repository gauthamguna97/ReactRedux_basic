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
      <div className="sidewrp" >
        {data.map((item, index) => (
          <div className={index === activIndex ? 'activ' : ''} onClick={() => props.setSelectedIndex(index)}>
              <div className="imgwrp"> 
              <img src={index === activIndex ? item.actImg : item.img} />
            </div>
          </div>
        ))}
      </div>
      <div className="sidestr" onClick={() => shosdmn(true) }>
        <div className="sidet" >
          {`>`}
        </div>
      </div>
    </div>
  );
}


export default connect(null, null)(SideMenu);