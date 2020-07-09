import React from "react";
import { connect } from "react-redux";
import { showTasks, addToTop, showAddTasks } from "../../Redux/actions";
import Menu from './DropDown';
import './staticheader.css';

const SHeader = (props) => {
  const { topData = {}, userData } = props;
  return (
    <div className="headerfix">
      <div className="headerval" style={{ width: "10%" }}>MYJU'S</div>
      <div className="headerval" style={{ width: "40%" }}>Resource Utilization</div>
      <div className="headerval" style={{ width: "10%", color: 'black', fontSize: '18px' }}>
        {
          <Menu />
        }
      </div>
      <div className="sbut headerval"
        style={{ width: "5%", margin: '0 2%', borderRadius: '15px', fontSize: '14px', color: 'white', backgroundColor: '#740070' }}
        onClick={() => props.showTaskFn({ UserName: topData.name })}
      >
        View
      </div>
      <div
        className="sbut headerval"
        onClick={() => props.showAddTaskFn({ UserName: topData.name })}
        style={{ width: "7%", margin: '0 2%', borderRadius: '15px', fontSize: '14px', color: 'white', backgroundColor: '#740070' }}
      >
        Add Task
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
