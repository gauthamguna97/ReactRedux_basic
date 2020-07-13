import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { showTasks, addToTop, showAddTasks } from "../../Redux/actions";
import './mainlayout.css';

const Headers = ['Resource', 'Availability', 'schedule'];
const MainLayout = (props) => {
  console.log(props);
  const { dataArray = [], dateList = [], month} = props;

  const _addToTop = (item) => {
    // props.addToTopFn(item);
    document.getElementsByName('myElements').scrollLeft = 5;
  }

  const handleScroll = (val) => {
    // props.addToTopFn(item);
    const scrld = document.getElementById("calendarscroll").offsetWidth * val
    document.getElementById('calendarscroll').scrollBy({
      left: scrld/2,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    document.getElementById('calendarscroll').scrollLeft = 0
    console.log('changed');
  }, [dateList]);

  return (
    <div className="wrap">
      <div className="hdrwrp">
        <div className="subhdr">
          <div className="headers">
            <div className="scroller" name="myElements">
              {Headers.map((item, index) => (
                <div className={index === 0 ? 'profile' : 'track'}>
                  <div className="heading" style={{ height: '50px', color: '#740070', fontWeight: '600' }}>{item}</div>
                </div>
              ))}
            </div>
          </div>
          {dataArray.map((item) => (
            <div className="scroller" onClick={() => _addToTop(item)} style={{ borderBottom: 'solid 5px #efefef ', backgroundColor: 'white', fontWeight: '600' }} name="myElements">
                <div className="profile">
                  <div style={{ width: '100%', height: '70px', textAlign: 'center' }}>
                    <img src="https://image.flaticon.com/icons/svg/3135/3135715.svg" />
                    <div className="textl">{item.name}</div>
                  </div>
                </div>
                <div className="track" style={{ color: ( (month === new Date().getMonth()) && item.Availabilty[month] > 20) || (month > new Date().getMonth()) ? 'green' : 'red', fontWeight: '400' }}>
                  <div className="entry">{month < new Date().getMonth() ? 0 : item.Availabilty[month]}%</div>
                </div>
                <div className="track" style={{ color: item.Availabilty[month] === 100 ? 'grey' : 'skyblue', fontWeight: '400' }}>
                  <div className="nop entry">
                    <div
                      style={{ display: 'inline-block', verticalAlign: 'top', padding: '4px 10px 0 0', width: '65%', cursor: item.Availabilty[month] !== 100 ? 'pointer' : '' }}
                      onClick={() => item.Availabilty[month] !== 100 && props.showTaskFn({ UserName: item.name } )}
                    >
                      Check
                    </div>
                    {item.Availabilty[month] !== 0 && <img onClick={() => props.showAddTaskFn({ UserName: item.name })} src="https://cdn3.iconfinder.com/data/icons/gradient-circle/36/5004-512.png" />}
                  </div>
                </div>
            </div>   
          ))}
        </div>
        <div className="subhdrcalwrp">
          <div className="greaterless" onClick={() => handleScroll(-1)}>{`<`}</div>
          <div className="subhdrcal">
            <div className="headers">
              <div className="scroller syncscroll" name="myElements">
                {dateList.map((item) => (
                  <div className="track">
                    <div className="" style={{ height: '50px', fontWeight: 'normal'}}>
                      <div className="heading" style={{ height: '28px', paddingTop: '10px' }}>{item.day}</div>
                      <div className="heading" style={{ height: '22px', paddingBottom: '5px'}}>{item.wDay}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="calschedule syncscroll" id="calendarscroll" name="myElements">
              {dataArray.map((item, index) => (
                <div className="tracks" style={{ backgroundColor: 'white' }}>
                  {dateList.map((_item, index) => (
                    (() => {
                      const itemIndex = item.schedule[month].start.indexOf(_item.day);
                      const noIndex = item.schedule[month].days.indexOf(_item.day);
                      var pth = '1 0 calc(10%)';
                      var borderRds = '0px';
                      let color = '';
                      if (itemIndex > -1 && noIndex > -1) {
                        const end = item.schedule[month].end[itemIndex];
                        const start = item.schedule[month].start[itemIndex];
                        const lth = dateList[dateList.length - 1 ].day > end ? (end - start) + 1 : (dateList[dateList.length - 1 ].day - start) + 1;
                        console.log('lth', lth,end, start)
                        pth = `1 0 calc(${10 * lth}%)`;
                        borderRds = '10px';
                        if ((month < new Date().getMonth()) || ( (month === new Date().getMonth()) && start < new Date().getDate())) {
                          color = 'grey';
                        } else {
                          color = '#339cff';
                        }
                      }
                      if ((itemIndex > -1) || (noIndex < 0)) {
                        return (
                          <div className="" style={{ flex: pth, borderBottom: 'solid 5px #efefef', backgroundColor: 'white' }}>
                            <div className="entry" style={{  backgroundColor: (itemIndex > -1) ? color : '', color: 'white', borderRadius: borderRds, fontWeight: '600' }}>
                              <div style={{ height: '100%', paddingTop: '15px' }}>{itemIndex > -1 ? item.schedule[month].names[itemIndex] : ''}</div>
                            </div>
                          </div>
                        )
                      }
                      return null;
                    })()
                  ))
                }
                </div>
              ))}
            </div>
          </div>
          <div className="greaterless" onClick={() => handleScroll(1)}>{`>`}</div>
        </div>
      </div>  
    </div>
  );
}

const mapStateToProps = (state) => ({
  dataArray: state.main.userData || [],
  filterArray: state.main.filterData || [],
  Search: state.main.search,
  dateList: state.main.dateList,
  CalendarData: state.CalendarData,
  month: state.main.month,
});

const mapDispatchToProps = (dispatch) => ({
  showTaskFn: (value) => dispatch(showTasks(value)),
  addToTopFn: (value) => dispatch(addToTop(value)),
  showAddTaskFn: (value) => dispatch(showAddTasks(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);