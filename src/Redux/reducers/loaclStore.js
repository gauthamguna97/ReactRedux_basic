function get(key) {
  let value = '';
  if (window.localStorage) {
    const val = window.localStorage.getItem(key);
    value = val ? JSON.parse(val) : '';
  }
  return value;
}

function set(key, value) {
  if (window.localStorage) {
    window.localStorage.setItem(key, JSON.stringify(value || ''));
  }
}

function remove(key) {
  // console.log(key);
  if (window.localStorage) {
    window.localStorage.removeItem(key);
  }
  // return delete this._data[key];
}

function clear() {
  // return this._data = {};
}

const localStorage = { set, get, remove, clear };

export default localStorage;
