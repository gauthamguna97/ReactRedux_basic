import { GlobalData } from './data.js';
import localStorage from './loaclStore.js';

const globalData = localStorage.get('userData') ? localStorage.get('userData') : GlobalData;
let userData = globalData;
const week = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];
const _dateList = (index = new Date().getMonth()) => {
  let out = [];
  var date = new Date(2020, index, 1);
  while (date.getMonth() === index) {
    var ele = {
      day: date.getDate(),
      wDay: week[date.getDay()],
    }
    out.push(ele);
    date.setDate(date.getDate() + 1);
  }
  return out;
}

const deleteItem = (data, indexArr, month) => {
  userData.forEach((element, index) => {
    if (element.name === data.name) {
      userData[index].schedule[month].start = element.schedule[month].start.filter((item, Idx) => indexArr.indexOf(Idx) == -1);
      userData[index].schedule[month].end = element.schedule[month].end.filter((item, Idx) => indexArr.indexOf(Idx) == -1);
      userData[index].schedule[month].blocks = element.schedule[month].blocks.filter((item, Idx) => indexArr.indexOf(Idx) == -1);
      var list = []
      userData[index].schedule[month].blocks.map((item, index) => {
        list = list.concat(item);
      });
      userData[index].Availabilty[month] = 100 - (list.length * 5);
      userData[index].schedule[month].days = list,
      userData[index].schedule[month].names = element.schedule[month].names.filter((item, Idx) => indexArr.indexOf(Idx) == -1);
    }
  });
  localStorage.set('userData', userData);
  return userData;
};

const addItem = (data, _Arr, month) => {
  userData.forEach((element, index) => {
    if (element.name === data.name) {
      userData[index].schedule[month].start.push(_Arr.start);
      userData[index].schedule[month].end.push(_Arr.end);
      userData[index].schedule[month].names.push(_Arr.name);
      userData[index].schedule[month].blocks.push(_Arr.block);
      var list = []
      userData[index].schedule[month].blocks.map((item, index) => {
        list = list.concat(item);
      });
      userData[index].schedule[month].days = list;
      userData[index].Availabilty[month] = 100 - (list.length * 5);
    }
  });
  localStorage.set('userData', userData);
  return userData;
};

const defaulState = {
  userData: userData,
  globalData: globalData,
  dateList: _dateList(),
  month: parseInt(new Date().getMonth(), 10),
  TopData: globalData && globalData[0],
}

export default function(state = defaulState, action) {
  console.log(action.payload);
  switch (action.type) {
    
    case "FETCH_DATA":
      if (action.payload.search) {
        console.log(action.payload, state.userData[0]);
        const fUser = action.payload.value ? userData.filter((item) => item.name.toLowerCase().indexOf(action.payload.value) > -1) : [];
        console.log(fUser)
        return {
          ...state,
          userData: fUser,
        }
      } else {
        return {
          ... state,
          userData: userData,
        }
      }
    
    case 'SHOW_TASKS':
      if (action.payload.UserName) {
        let taskData = userData.filter((item) => item.name === action.payload.UserName);
        taskData = taskData[0];
        console.log(action, taskData);
        return {
          ...state,
          taskData: taskData,
          showTasks: true,
        }
      } else {
        return {
          ...state,
          showTasks: false,
        }
      }
    case 'SHOW_ADD_TASKS':
      if (action.payload.UserName) {
        let taskData = userData.filter((item) => item.name === action.payload.UserName);
        taskData = taskData[0];
        console.log(action, taskData);
        return {
          ...state,
          taskData: taskData,
          showAddTasks: true,
        }
      } else {
        return {
          ...state,
          showAddTasks: false,
        }
      }
    case 'FETCH_DATE_LIST':
      return {
        ...state,
        dateList: _dateList(action.payload),
        month: action.payload,
      }
    case 'DELETE_TASKS':
      const { taskData, select } = action.payload;
      userData = deleteItem(taskData, select, state.month);
      console.log('useDate', userData);
      return {
        ...state,
        userData: userData,
        showTasks: false,
      }
    case 'ADD_TO_TOP':
      console.log('payload')
      return {
        ...state,
        TopData: action.payload,
      }
    case 'ADD_TASK':
      const { AddData, _Arr } = action.payload;
      userData = addItem(AddData, _Arr, state.month);
      console.log('useDate', userData);
      return {
        ...state,
        userData: userData,
        showTasks: false,
      }
  }
  return state;
}
