import { combineReducers } from "redux";
import { History } from "history";
import { RouterState, connectRouter } from "connect-react-router-redux";
import counterReducer from "./counter";

const rootReducer = (history: History) =>
  combineReducers({
    count: counterReducer,
    router: connectRouter(history),
  });

export interface State {
  count: number;
  router: RouterState;
}

export default rootReducer;
