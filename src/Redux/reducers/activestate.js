export default function(state = null, action) {
  // console.log(action.payload);
  switch (action.type) {
    case "SHOW_SIDEMENU":
      return action.payload;
  }
  return state;
}
