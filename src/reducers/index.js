import shopReducer from "./addShopReducer";
const { combineReducers } = require("redux");
const rootReducer = combineReducers({
  shopReducer,
});

export default rootReducer;
