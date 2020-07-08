import React, { Component } from "react";
import { connect } from "react-redux";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { addTaskFunction, sendDelete, showAddTasks } from "../../Redux/actions";

class ViewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tasks: [
        'TaskA - 1 day',
        'TaskB - 2 days',
        'TaskC - 3 days',
      ],
      tasks: [
        'TaskA',
        'TaskB',
        'TaskC',
      ],
      PickDate: false,
      aSelect: [],
      disabledDays: [],
      text: '',
      show: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleS(index) {
    var _select = this.state.aSelect;
    const Idx = _select.indexOf(index);
    if (Idx > -1) {
      _select.splice(Idx, 1);
    } else {
      if (_select.length > 0) {
        _select[0] = index;
      } else {
        _select.push(index);
      }
    }
    this.setState({
      aSelect: _select,
    });
  }

  DeleteL() {
    const { aSelect } = this.state;
    const { taskData, month } = this.props;
    if (aSelect.length > 0) {
      this.disDates = taskData.schedule[month].days.map((item, index) => new Date(2020, month, item));
      if ( month === new Date().getMonth()) {
        this.disDates.push({
          after: new Date(2020, month, 0),
          before: new Date(),
        });
      }
      this.setState({ PickDate: true });
    }
  }

  handleClick(day, modifiers = {}) {
    if (modifiers.disabled) return;
    const { aSelect } = this.state;
    const { month } = this.props;
    const _date = parseInt(day.toLocaleDateString().split('/')[1]);
    var issue = false;
    console.log(_date, 'dateeeee');
    for (var i=0; i <= aSelect[0]; i++) {
      if (this.props.taskData.schedule[month].days.indexOf(_date + i) > -1) {
        this.setState({
          text: 'Overlapping with other tasks'
        });
        issue = true;
        break;
      }
    }
    if (!issue) {
      console.log(new Date(2020, month + 1, 0).getDate(), _date + aSelect[0])
      if (new Date(2020, month + 1, 0).getDate() >= _date + aSelect[0]) {
        this.setState({
          text: 'TaskAdded',
          show: false,
        });
        var list = [];
        for (var i = 0; i <= aSelect[0]; i++) {
            list.push(_date + i);
        }
        this.props.addTaskFunction({ _Arr: {start: _date, end: _date + aSelect[0], name: this.state.tasks[aSelect[0]], block: list}, AddData: this.props.taskData });
        setTimeout(() => {
          this.props.showAddTasksFn({});
        }, 1000);
      } else {
        this.setState({
          text: 'Task exceeding month'
        });
      }
    }

  }

  render() {
    const { aSelect, Tasks, PickDate, text, show } = this.state;
    const { taskData, month } = this.props;
    let Avail = false;
    if (taskData.Availabilty[month] === 0 || new Date().getMonth() > month) {
      Avail = true;
    }
    return(
      <div
        style={{ position: "fixed", zIndex: '100', width: '25%', left: (screen.width - 100)/2 , top: '20%', backgroundColor: 'white', borderRadius: '5px' }}
      >
        <div className="sclose" onClick={() => this.props.showAddTasksFn({})}/>
        <div style={{ padding: '5%', height: '10%'}}>
          <div style={{ textAlign: 'center', color: '#740070' }}>{taskData.name}</div>
        </div>
        <div style={{ padding: '5%', height: '10%'}}>
          <div style={{ textAlign: 'center', color: 'black' }}> Availabilty {!Avail ? taskData.Availabilty[month] : 0}%</div>
        </div>
        {!PickDate && show && !Avail &&
          <div>
            <div style={{ padding: '5%', height: '10%'}}>
              <div style={{ textAlign: 'center', color: 'blue' }}>Select Task</div>
            </div>
            <div className="pkmvans pkmvansblk">
              {Tasks.map((item, index) => (
                (() => {
                  let qer = taskData.Availabilty[month];
                  let _show = true;
                  if (qer < (index + 1) * 5) {
                    _show = false;
                  }
                  return (
                    <div className={ aSelect.indexOf(index) > -1 ? 'pkmvanstext activ' : 'pkmvanstext' } style ={{ color: _show ? 'black' : 'grey' }} onClick={() => _show && this.handleS(index)}>
                      <span className="packchkouter">
                        {_show && <span className="packchk"></span>}
                      </span>
                      <span className="packchktxt font16">
                        {item}
                      </span>
                  </div>
                  )
                })()
              ))}
            </div>
            <div style={{ padding: '20px 30%', height: '60px'}}>
              <div style={{ textAlign: 'center', backgroundColor: aSelect.length > 0 ? '#740070' : 'grey', color: 'white', borderRadius: '10px' }} onClick={() => this.DeleteL()}>Next</div>
            </div>
          </div>  
        }
        {Avail && !text &&
          <div style={{ padding: '5%', height: '10%'}}>
            <div style={{ textAlign: 'center', color: 'blue' }}>Not Available</div>
          </div>
        }
        {PickDate && show &&
          <div>
            <div style={{ padding: '5%', height: '10%'}}>
              <div style={{ textAlign: 'center', color: 'blue' }}>Pick Start Date</div>
            </div>
            <DayPicker
              initialMonth={new Date(2020, month)}
              fromMonth={new Date(2020, month)}
              toMonth={new Date(2020, month)}
              disabledDays={this.disDates}
              selectedDays={null}
              onDayClick={this.handleClick}
            />
          </div>
          
        }
        {text &&
          <div style={{ padding: '5%', height: '10%'}}>
            <div style={{ textAlign: 'center', color: '#740070' }}>{text}</div>
          </div>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  taskData : state.main.taskData,
  month: state.main.month,
});

const mapDispatchToProps = (dispatch) => ({
  showAddTasksFn: (value) => dispatch(showAddTasks(value)),
  addTaskFunction: (value) => dispatch(addTaskFunction(value)),
  sendDelete: (value) => dispatch(sendDelete(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewTask);