export default function(state = null, action) {
  console.log(action.payload);
  switch (action.type) {
    case "ITEM_SELECTED":
      return action.payload;
  }

  return state;
}
