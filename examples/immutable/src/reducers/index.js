import { combineReducers } from "redux-immutable";
import { connectRouter } from "connect-react-router-redux/immutable";
import counterReducer from "./counter";

const rootReducer = (history) =>
  combineReducers({
    count: counterReducer,
    router: connectRouter(history),
  });

export default rootReducer;
