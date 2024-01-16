import React from "react";
import { History } from "history";
import { ConnectedRouter } from "connect-react-router-redux";
import routes from "./routes";

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return <ConnectedRouter history={history}>{routes}</ConnectedRouter>;
};

export default App;
