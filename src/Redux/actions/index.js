
export function showSideMenu(item) {
  return {
    type: "ITEM_SELECTED",
    payload: item
  };
}

export function showTasks(item) {
  return {
    type: "SHOW_TASKS",
    payload: item
  };
}

export function showAddTasks(item) {
  return {
    type: "SHOW_ADD_TASKS",
    payload: item
  };
}

export function getUserData(item) {
  // console.log('dispatching');
  return {
    type: "FETCH_DATA",
    payload: item,
  };
}

export function sendDelete(item) {
  // console.log('dispatching');
  return {
    type: "DELETE_TASKS",
    payload: item,
  };
}

export function addToTop(item) {
  // console.log('dispatching');
  return {
    type: "ADD_TO_TOP",
    payload: item,
  };
}

export function getDateList(item) {
  return {
    type: "FETCH_DATE_LIST",
    payload: item,
  };
}

export function addTaskFunction(item) {
  return {
    type: "ADD_TASK",
    payload: item,
  };
}