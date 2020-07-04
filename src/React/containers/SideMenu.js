import React from "react";
import { connect } from "react-redux";

const SideMenu = (props) => {
  const { data = [], show, selectedIndex } = props;
  return (
    <div id="flyoutMenu" className={show ? 'show' : 'hide'}>
      <div className="bglist">
        {data.map((item, index) => (
          <div className={selectedIndex === index ? 'active' : ''}>
            <div className="bgwrp">
              <div className="sidetxt">
                <div style={{ color: selectedIndex === index ? '#1E90FF' : 'white' }}>{item.name}</div>
              </div>
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