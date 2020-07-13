import React from "react";
import { Component } from "react";
import SideMenu from "../containers/SideMenu.js";
import MainLayout from "../containers/MainLayout.js";
import StaticHeader from "../containers/StaticHeader.js";
import SideBar from "../containers/SideBar.js";
import { connect } from "react-redux";
import { showTasks, showAddTasks } from "../../Redux/actions/index.js";
import ResourceFilter from "../containers/ResourceFilter.js";
import ViewTask from "../containers/ViewTask.js";
import AddTask from "../containers/AddTask.js";
import '../../../style/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sideMenu: [
          {name: 'Home', id: 1, img: 'https://akam.cdn.jdmagicbox.com/images/icons/android/video2.png', actImg: 'https://akam.cdn.jdmagicbox.com/images/icons/android/videosactivewbg.png'},
          {name: 'Task Manager', id: 1, img: 'https://akam.cdn.jdmagicbox.com/images/icons/android/video2.png', actImg: 'https://akam.cdn.jdmagicbox.com/images/icons/android/videosactivewbg.png'},
          {name: 'Resource view', id: 1, img: 'https://akam.cdn.jdmagicbox.com/images/icons/android/video2.png', actImg: 'https://akam.cdn.jdmagicbox.com/images/icons/android/videosactivewbg.png'},
          {name: 'Enquiry', id: 1, img: 'https://akam.cdn.jdmagicbox.com/images/icons/android/video2.png', actImg: 'https://akam.cdn.jdmagicbox.com/images/icons/android/videosactivewbg.png'},
          {name: 'Utilization', id: 1, img: 'https://akam.cdn.jdmagicbox.com/images/icons/android/video2.png', actImg: 'https://akam.cdn.jdmagicbox.com/images/icons/android/videosactivewbg.png'},
        ],
        selectedIndex: 0,
        showSideBar: false,
    };
    this.showSideMenu = this.showSideMenu.bind(this);
    this.setSelectedIndex = this.setSelectedIndex.bind(this);
  }

  showSideMenu(val, index) {
    this.setState({
      showSideBar: val,
      selectedIndex: index ? index[0] : this.state.selectedIndex,
    });
  }

  setSelectedIndex(val) {
    this.setState({
      selectedIndex: val,
    })
  }

  handleSelection() {
    if (this.props._showTasks) {
      this.props.showTasks({});
    } else if (this.props.showTasks) {
      this.props._showAddTasks({});
    }
    this.showSideMenu(false);
  }


  render() {
    const { sideMenu, showSideBar, selectedIndex } = this.state;
    const { _showTasks, showAddTasks } = this.props;
    // console.log(this.props);
    return (
      <div className="twrapper">
        <div className="appleft">
          <SideBar data={sideMenu} showSideMenuFn={this.showSideMenu} setSelectedIndex={this.setSelectedIndex} activIndex={selectedIndex} />
        </div>
        <div className="wrapper">
          <StaticHeader showSideMenuFn={this.showSideMenu} />
          <div className="appwrapper">
            <ResourceFilter />
            <MainLayout />
          </div>
        </div>
        <div className="sidemenupop">
          {(showSideBar || _showTasks || showAddTasks ) &&
            <span onClick={() => this.handleSelection()} className="popup_overlay" /> 
          }
          {
            <SideMenu data={this.state.sideMenu} show={showSideBar} selectedIndex={selectedIndex} showSideMenuFn={this.showSideMenu} />
          }
          {_showTasks &&
            <ViewTask />
          }
          {showAddTasks &&
            <AddTask />
          }
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  _showTasks: state.main.showTasks,
  showAddTasks: state.main.showAddTasks,
});

const mapDispatchToProps = (dispatch) => ({
  showTasks: (value) => dispatch(showTasks(value)),
  _showAddTasks: (value) => dispatch(showAddTasks(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
