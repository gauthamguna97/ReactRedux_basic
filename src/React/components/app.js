import React from "react";
import { Component } from "react";
import InViewMonitor from 'react-inview-monitor';
import List from "../containers/list.js";
import SideMenu from "../containers/SideMenu.js";
import Header from "../containers/Header.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sideMenu: [
          {name: 'Home', id: 1, img: 'https://akam.cdn.jdmagicbox.com/images/icons/android/video2.png', actImg: 'https://akam.cdn.jdmagicbox.com/images/icons/android/videosactivewbg.png'},
          {name: 'Task Manager', id: 1, img: 'https://akam.cdn.jdmagicbox.com/images/icons/android/video2.png', actImg: 'https://akam.cdn.jdmagicbox.com/images/icons/android/videosactivewbg.png'},
          {name: 'Resource Manager', id: 1, img: 'https://akam.cdn.jdmagicbox.com/images/icons/android/video2.png', actImg: 'https://akam.cdn.jdmagicbox.com/images/icons/android/videosactivewbg.png'},
        ],
        selectedIndex: 0,
    };
  }

  showSideMenu(val) {
    this.setState({
      showSideBar: val
    });
  }

  render() {
    const { sideMenu, showSideBar, selectedIndex } = this.state;
    return (
      <div>
        <Header />
        <div className="wrapper">
          <div className="sidemenu">
            <div className="sidewrp" >
              {sideMenu.map((item, index) => (
                <div className={index === selectedIndex ? 'activ' : ''} onClick={() => this.setState({selectedIndex: index})}>
                   <div className="imgwrp"> 
                    <img src={index === selectedIndex ? item.actImg : item.img} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rightarrow" onClick={() => this.showSideMenu(true)}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRy80o55Yi7zcropiITyj_60j_ITCo5_wvfyQ&usqp=CAU" />
          </div>
          <div className="appwrapper" onClick={() => this.showSideMenu(true)}>show</div>
        </div>
        <div className="sidemenupop">
          {showSideBar &&
            <span onClick={() => this.showSideMenu(false)} className="popup_overlay" /> 
          }
          <SideMenu data={this.state.sideMenu} show={showSideBar} selectedIndex={selectedIndex} />
        </div>
      </div>
      
    );
  }
}
