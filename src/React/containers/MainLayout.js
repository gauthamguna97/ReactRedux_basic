import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { showTasks, addToTop } from "../../Redux/actions";
import './mainlayout.css';

const Headers = ['Resource', 'Availability', 'schedule'];
const SideMenu = (props) => {
  console.log(props);
  const { dataArray = [], dateList = [], month} = props;

  const _addToTop = (item) => {
    // props.addToTopFn(item);
  }

  return (
    <div className="wrap">
      <div className="hdrwrp">
        <div className="subhdr">
          <div className="headers">
            <div className="scroller" name="myElements">
              {Headers.map((item) => (
                <div className="track">
                  <div className="heading" style={{ height: '50px', color: '#740070', fontWeight: '600', fontSize: '15px'}}>{item}</div>
                </div>
              ))}
            </div>
          </div>
          {dataArray.map((item) => (
            <div className="scroller" onClick={() => _addToTop(item)} style={{ borderBottom: 'solid 5px #efefef ', backgroundColor: 'white', fontSize: '15px', fontWeight: '600' }} name="myElements">
                <div className="track">
                  <div className="entry">{item.name}</div>
                </div>
                <div className="track" style={{ color: ( (month === new Date().getMonth()) && item.Availabilty[month] > 20) || (month > new Date().getMonth()) ? 'green' : 'red', fontWeight: '400' }}>
                  <div className="entry">{month < new Date().getMonth() ? 0 : item.Availabilty[month]}%</div>
                </div>
                <div className="track" style={{ color: item.Availabilty[month] === 100 ? 'grey' : 'skyblue', fontWeight: '400' }}>
                  <div className="entry" onClick={() => item.Availabilty[month] !== 100 && props.showTaskFn({ UserName: item.name } )}>Check</div>
                </div>
            </div>   
          ))}
        </div>
        <div className="subhdrcal" id="calendarscroll">
          <div className="headers">
            <div className="scroller syncscroll" name="myElements">
              {dateList.map((item) => (
                <div className="track">
                  <div className="" style={{ height: '50px', fontSize: '10px', fontWeight: 'normal'}}>
                    <div className="heading" style={{ height: '20%', paddingTop: '30%' }}>{item.day}</div>
                    <div className="heading" style={{ height: '50%'}}>{item.wDay}</div>
                  </div> 
                </div>
              ))}
            </div>
          </div>
          <div className="calschedule syncscroll" name="myElements">
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
                          <div className="entry" style={{  backgroundColor: (itemIndex > -1) ? color : '', color: 'white', borderRadius: borderRds, fontSize: '10px', fontWeight: '600' }}>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);