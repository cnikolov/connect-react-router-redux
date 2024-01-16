import { combineReducers } from "redux";
import { connectRouter } from "connect-react-router-redux";
import counterReducer from "./counter";

const rootReducer = (history) =>
  combineReducers({
    count: counterReducer,
    router: connectRouter(history),
  });

export default rootReducer;
