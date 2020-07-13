import React from "react";
import { connect } from "react-redux";
import { showTasks, addToTop, showAddTasks } from "../../Redux/actions";
import Menu from './DropDown';
import './staticheader.css';

const SHeader = (props) => {
  const { topData = {}, userData } = props;
  return (
    <div className="headerfix">
      <div className="burgeri" onClick={() => props.showSideMenuFn(true)}>
        <img src="https://cdn3.iconfinder.com/data/icons/mobile-banking-ver-4a/100/1-48-512.png" />
      </div>
      <div className="headerval mheading">Utilization</div>
      <div className="headersecondwrap">
        <div className="headersecond">
          <div className="headerval cname">
            <Menu />
          </div>
          <div
            className="ctask"
          >
            <img onClick={() => props.showAddTaskFn({ UserName: topData.name })} src="https://cdn3.iconfinder.com/data/icons/gradient-circle/36/5004-512.png"/>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.activedata)
  return {
    topData: state.main.TopData,
    userData: state.main.userData,
  };
}

const mapDispatchToProps = (dispatch) => ({
  showTaskFn: (value) => dispatch(showTasks(value)),
  showAddTaskFn: (value) => dispatch(showAddTasks(value)),
  addToTopFn: (value) => dispatch(addToTop(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SHeader);
