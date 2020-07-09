import React, { useState } from "react";
import { connect } from "react-redux";
import { getUserData, getDateList } from "../../Redux/actions";
import './resourcefilter.css';

const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const ResourceFilter = (props) => {
  const { month = parseInt(new Date().getMonth(), 10) } = props;
  const [val, setVal] = useState('');

  const getDate = (value = '') => {
    setVal(value);
    if (value) {
      props.getUserDataFn({ value: value.toLowerCase(), search: true});
    } else {
      props.getUserDataFn({ value, search: false});
    }
  }

  const getDateList = (val) => {
    if (val) {
      props.getDateListFn(month + 1 > 11 ? 1 : month + 1);
    } else {
      props.getDateListFn(month - 1 < 0 ? 11 : month - 1);
    }
  }
  return(
    <div style={{ width: '90%', height: '20px', padding: '20px' }}>
      <div style={{ display: 'inline-block', width: '50%', height: '100%' }}>
        <input
          placeholder="search names"
          value={val}
          style={{ height: '100%', width: '70%', borderRadius: '2px', color: '#740070' }}
          onInput={(e) => getDate(e.target.value)}
        />
      </div>  
      <div style={{ display: 'inline-block', width: '35%', height: '100%', paddingLeft: '15%' }}>
        <span style={{ paddingRight: '5px', color: 'grey'}} onClick={() => getDateList()}>{`<`}</span>
        <span style={{ color: '#740070' }}>{`${monthList[month]} 2020`}</span>
        <span style={{ paddingLeft: '5px', color: 'grey'}} onClick={() => getDateList(true)}>{`>`}</span>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  month: state.main.month,
});

const mapDispatchToProps = (dispatch) => ({
  getUserDataFn: (params) => dispatch(getUserData(params)),
  getDateListFn: (params) => dispatch(getDateList(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResourceFilter);
