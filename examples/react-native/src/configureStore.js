import {createMemoryHistory} from 'history';
import {createStore, combineReducers} from 'redux';
import {connectRouter} from 'connect-react-router-redux';

const initialState = {router: createMemoryHistory()};

const configureStore = () => {
  const history = initialState.router;
  const store = createStore(
    combineReducers({
      router: connectRouter(history),
    }),
    initialState,
  );

  return {history, store};
};

export default configureStore;
