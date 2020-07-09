import React, { Component } from "react";
import { connect } from "react-redux";
import { showTasks, sendDelete } from "../../Redux/actions";
import './viewtask.css';

class ViewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aSelect: [],
      text: '',
      show: true,
    };
    this.monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }

  handleS(index) {
    var _select = this.state.aSelect;
    const Idx = _select.indexOf(index);
    if (Idx > -1) {
      _select.splice(Idx, 1);
    } else {
      _select.push(index);
    }
    this.setState({
      aSelect: _select,
    });
  }

  DeleteL() {
    const { aSelect } = this.state;
    if (aSelect.length > 0) {
      this.setState({
        text: `${aSelect.length > 1 ? 'Tasks': 'Task'} deleted`,
        show: false,
      })
      setTimeout(() => {
        this.props.sendDelete({ taskData: this.props.taskData, select: aSelect });
      }, 1000);
    }
  }

  render() {
    const { aSelect, text, show } = this.state;
    const { taskData: { schedule }, taskData, month } = this.props;
    if (!taskData) {
      return;
    }
    return (
      <div
        style={{ position: "fixed", zIndex: '100', width: '25%', left: (screen.width - 100)/2 , top: '20%', backgroundColor: 'white', borderRadius: '5px' }}
      >
        <div className="sclose" onClick={() => this.props.showTasksFn({})}/>
        <div style={{ padding: '5%', height: '10%'}}>
          <div style={{ textAlign: 'center', color: '#740070' }}>{taskData.name}</div>
        </div>
        {schedule[month].start.length > 0 && show &&
          <div className="pkmvans pkmvansblk">
            {schedule[month].start.map((item, index) => (
              (() => {
                let shoT = true;
                if ((month < new Date().getMonth()) || ((month === new Date().getMonth()) && item < new Date().getDate())) {
                  shoT = false;
                }
                return(
                  <div className={ aSelect.indexOf(index) > -1 ? 'pkmvanstext activ' : 'pkmvanstext' } style={{ color: !shoT ? 'grey' : ''}} onClick={() => shoT && this.handleS(index)}>
                    <span className="packchkouter">
                      {shoT && <span className="packchk"></span>}
                    </span>
                    <span className="packchktxt font16">
                      {`${schedule[month].names[index]} `}
                        <span style={{ fontSize: '10px' }}>{`(${item} - ${schedule[month].end[index]} ${this.monthList[month]})`}</span>
                    </span>
                  </div>
                )
              })()
            ))}
            <div style={{ padding: '20px 30%', height: '60px'}}>
              <div style={{ textAlign: 'center', backgroundColor: aSelect.length > 0 ? '#740070' : 'grey', color: 'white', borderRadius: '10px' }} onClick={() => this.DeleteL()}>Delete</div>
            </div>
          </div>
        }
        {schedule[month].start.length === 0 && show &&
          <div style={{ padding: '5%', height: '10%'}}>
            <div style={{ textAlign: 'center', color: '#740070' }}>No Tasks To show</div>
          </div>
        }
        {text &&
          <div style={{ padding: '5%', height: '10%'}}>
            <div style={{ textAlign: 'center', color: '#740070' }}>{text}</div>
          </div>
        }
      </div>
    );
    return
  }
}

const mapStateToProps = (state) => ({
  taskData : state.main.taskData,
  month: state.main.month,
});

const mapDispatchToProps = (dispatch) => ({
  showTasksFn: (value) => dispatch(showTasks(value)),
  sendDelete: (value) => dispatch(sendDelete(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewTask);