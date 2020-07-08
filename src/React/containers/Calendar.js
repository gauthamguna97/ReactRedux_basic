import React from "react";
import { connect } from "react-redux";
 
const list = [
  { day: 5, weekDay:'Mon' },
  { day: 6, weekDay:'Tue' },
  { day: 7, weekDay:'Tue' },
  { day: 8, weekDay:'Tue' },
  { day: 9, weekDay:'Tue' },
  { day: 10, weekDay:'Tue' },
  { day: 11, weekDay:'Tue' },
  { day: 12, weekDay:'Tue' },
  { day: 13, weekDay:'Tue' },
  { day: 14, weekDay:'Tue' },
  { day: 15, weekDay:'Tue' },
  { day: 16, weekDay:'Tue' },
  { day: 17, weekDay:'Tue' },
  { day: 18, weekDay:'Tue' },
  { day: 20, weekDay:'Tue' },
];
const dataArray = [
  {
    name: 'Google',
    Availabilty: '100%',
    schedule: {
      start: [5, 10, 15],
      end: [5, 12, 18],
      days: [5,10,11,12,15,16,17,18],
      length: [1, 3, 3],
    },
    sData: {
      '5': {
        start: 5,
        length: 4,
        end: 8
      }
    },
  },
  {
    name: 'Google',
    Availabilty: '100%',
    schedule: {
      start: [5, 10, 15],
      end: [7, 12, 18],
      days: [5,6,7,10,11,12,15,16,17,18],
      length: [3, 3, 3],
    },
    sData: {
      '5': {
        start: 5,
        length: 4,
        end: 8
      }
    },
  },
  {
    name: 'Google',
    Availabilty: '100%',
    schedule: {
      start: [5, 10, 15],
      end: [7, 12, 18],
      days: [5,6,7,10,11,12,15,16,17,18],
      length: [3, 3, 3],
    },
    sData: {
      '5': {
        start: 5,
        length: 4,
        end: 8
      }
    },
  },
  {
    name: 'Google',
    Availabilty: '100%',
    schedule: {
      start: [5, 10, 15],
      end: [7, 12, 18],
      days: [5,6,7,10,11,12,15,16,17,18],
      length: [3, 3, 3],
    },
    sData: {
      '5': {
        start: 5,
        length: 4,
        end: 8
      }
    },
  },
  {
    name: 'Google',
    Availabilty: '100%',
    schedule: {
      start: [5, 10, 15],
      end: [7, 12, 18],
      days: [5,6,7,10,11,12,15,16,17,18],
      length: [3, 3, 3],
    },
    sData: {
      '5': {
        start: 5,
        length: 4,
        end: 8
      }
    },
  },

  {
    name: 'Google',
    Availabilty: '100%',
    schedule: {
      start: [5, 10, 15],
      end: [7, 12, 18],
      days: [5,6,7,10,11,12,15,16,17,18],
      length: [3, 3, 3],
    },
    sData: {
      '5': {
        start: 5,
        length: 4,
        end: 8
      }
    },
  },
  {
    name: 'Google',
    Availabilty: '100%',
    schedule: {
      start: [5, 10, 15],
      end: [7, 12, 18],
      days: [5,6,7,10,11,12,15,16,17,18],
      length: [3, 3, 3],
    },
    sData: {
      '5': {
        start: 5,
        length: 4,
        end: 8
      }
    },
  },
  {
    name: 'Google',
    Availabilty: '100%',
    schedule: {
      start: [5, 10, 15],
      end: [7, 12, 18],
      days: [5,6,7,10,11,12,15,16,17,18],
      length: [3, 3, 3],
    },
    sData: {
      '5': {
        start: 5,
        length: 4,
        end: 8
      }
    },
  },
  {
    name: 'Google',
    Availabilty: '100%',
    schedule: {
      start: [5, 10, 15],
      end: [7, 12, 18],
      days: [5,6,7,10,11,12,15,16,17,18],
      length: [3, 3, 3],
    },
    sData: {
      '5': {
        start: 5,
        length: 4,
        end: 8
      }
    },
  },
  {
    name: 'Google',
    Availabilty: '100%',
    schedule: {
      start: [5, 10, 15],
      end: [7, 12, 18],
      days: [5,6,7,10,11,12,15,16,17,18],
      length: [3, 3, 3],
    },
    sData: {
      '5': {
        start: 5,
        length: 4,
        end: 8
      }
    },
  },
  {
    name: 'Google',
    Availabilty: '100%',
    schedule: {
      start: [5, 10, 15],
      end: [7, 12, 18],
      days: [5,6,7,10,11,12,15,16,17,18],
      length: [3, 3, 3],
    },
    sData: {
      '5': {
        start: 5,
        length: 4,
        end: 8
      }
    },
  },
  {
    name: 'Google',
    Availabilty: '100%',
    schedule: {
      start: [5, 10, 15],
      end: [7, 12, 18],
      days: [5,6,7,10,11,12,15,16,17,18],
      length: [3, 3, 3],
    },
    sData: {
      '5': {
        start: 5,
        length: 4,
        end: 8
      }
    },
  },
  {
    name: 'Google',
    Availabilty: '100%',
    schedule: {
      start: [5, 10, 15],
      end: [7, 12, 18],
      days: [5,6,7,10,11,12,15,16,17,18],
      length: [3, 3, 3],
    },
    sData: {
      '5': {
        start: 5,
        length: 4,
        end: 8
      }
    },
  },
  {
    name: 'Google',
    Availabilty: '100%',
    schedule: {
      start: [5, 10, 15],
      end: [7, 12, 18],
      days: [5,6,7,10,11,12,15,16,17,18],
      length: [3, 3, 3],
    },
    sData: {
      '5': {
        start: 5,
        length: 4,
        end: 8
      }
    },
  },
];

const Calendar = (props) => {
  const { show, selectedIndex } = props;
  const scrollTable = (dir) => {
    const ele = document.getElementById("calendarscroll");
    if (ele) {
        dir === 'right' ? ele.scrollLeft +=96 : ele.scrollLeft -=96;

    }
  }
  return (
    <div className="usercalendar">
      <div className="users">
        <table style={{ tableLayout: 'fixed', width: '100%', borderSpacing: 'unset' }}>
          <tr className="userwpr">
            <th className="userlist sticker"><div className="usertext">Resource</div></th>
            <th className="userlist sticker"><div className="usertext">Availability</div></th>
            <th className="userlist sticker"><div className="usertext">Schedule</div></th>
          </tr>
          {dataArray.map((item, index) => (
            <tr className="listwpr" style={{ backgroundColor: (index%2 === 0) ? '#D3EAF3' : '#EEF4F6' }} >
              <td className="userlist"><div className="usertext">{item.name}</div></td>
              <td className="userlist"><div className="usertext">{item.Availabilty}</div></td>
              <td className="userlist"><div className="usertext">{}</div></td>
            </tr>
          ))}
        </table>
      </div>
      <div className="greaterless" style={{ textAlign: 'right' }} onClick={() => scrollTable('left')}>{`<`}</div>
      <div className="calendars" id="calendarscroll">
        <table style={{ tableLayout: 'fixed', borderSpacing: 'unset' }}>
          <tr className="userwpr">
            {list.map((item, index) => (
              <th className="userlist" style={{ fontSize: '12px', fontWeight: 'normal' }}>
                  <div style={{ width: '30px' }}>{item.day}</div>
                  <div style={{ width: '30px' }}>{item.weekDay}</div>
              </th>
            ))}
          </tr>
          {dataArray.map((item, index) => (
            <tr className="listwpr" style={{ backgroundColor: 'white' }}>
              {list.map((_item, index) => (
                (() => {
                  if (item.schedule['days'].indexOf(_item.day) > - 1) {
                    var _padding= '0px';
                    var _width = '50px';
                    var borderR = '0px';
                    var start = false;
                    var tW = '0';
                    if (item.schedule['start'].indexOf(_item.day) > - 1) {
                      _padding = '0 0 0 10px';
                      borderR = '10px 0px 0px 10px';
                      _width = '40px';
                      tW = (50 * item.schedule['length'][item.schedule['start'].indexOf(_item.day)]) - 20;
                      tW = `${tW}px`;
                      start = true
                    } else if (item.schedule['end'].indexOf(_item.day) > - 1) {
                      _width = '40px';
                      _padding = '0 10px 0 0';
                      borderR = '0 10px 10px 0px';

                    }
                    return (
                      <td className="userlist" style={{ fontSize: '12px', fontWeight: 'normal',  padding: _padding }}>
                        <div style={{ backgroundColor: 'black', display: 'block', color: 'white', width: _width, height: '40px', borderRadius: borderR }}>
                          {start && <div className="insidetext" style={{ width: tW }}>Greetings</div>}
                        </div>
                      </td>
                    )
                  }
                  return (
                    <td className="userlist" style={{ fontSize: '12px', fontWeight: 'normal', }} />
                  )
                })()
              ))}
            </tr>
          ))}
        </table>
      </div>
      <div className="greaterless" style={{ textAlign: 'left' }} onClick={() => scrollTable('right')}>{`>`}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.activedata)
  return {
    active : state.activedata
  };
}

export default connect(mapStateToProps)(Calendar);