import React from "react";
import { connect } from "react-redux";
import './sidemenu.css';

const SideMenu = (props) => {
  const { data = [], show, selectedIndex } = props;
  return (
    <div id="flyoutMenu" className={show ? 'show' : 'hide'}>
      <div className="bglist">
        <div className="closewrp" >
          <div className="close" onClick={() => props.showSideMenuFn(false)}/>
        </div>
        {data.map((item, index) => (
          <div className={selectedIndex === index ? ' bgwrp active' : 'bgwrp'} onClick={() => props.showSideMenuFn(false, [index])}>
            <div className="sidetxt">
              <div style={{ color: selectedIndex === index ? 'black' : 'white' }}>{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.activedata)
  return {
    active : state.activedata
  };
}

export default connect(mapStateToProps)(SideMenu);