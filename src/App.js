import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { refreshToken } from "./redux/actions/authAction";
import PageRender from "./navigateRouter/PageRender";
import PrivateRouter from "./navigateRouter/PrivateRouter";
import home from "./pages/home";
import login from "./pages/login";
import Register from "./pages/register";

import AlertMsg from "./components/alert/AlertMsg";
import Header from "./components/header/Header";
import StatusModal from "./components/StatusModal";
import { getPosts } from "./redux/actions/postAction";
import { getSuggestions } from "./redux/actions/suggestionsAction";

import io from "socket.io-client";
import { GLOBALTYPES } from "./redux/constants/globalTypes";
import SocketClient from "./components/SocketClient";
import { getNotifies } from "./redux/actions/notifyAction";

function App() {
  const { auth, status, modal } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
    const socket = io();
    dispatch({ type: GLOBALTYPES.SOCKET, payload: socket });
    return () => socket.close();
  }, [dispatch]);

  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts(auth.token));
      dispatch(getSuggestions(auth.token));
      dispatch(getNotifies(auth.token));
    }
  }, [dispatch, auth.token]);

  return (
    <Router>
      <AlertMsg />
      <input type="checkbox" id="theme" />
      <div className={`App ${(status || modal) && "mode"}`}>
        <div className="main">
          {auth.token && <Header />}
          {status && <StatusModal />}
          {auth.token && <SocketClient />}

          <Route exact path="/" component={auth.token ? home : login} />
          <Route exact path="/register" component={Register} />

          <PrivateRouter exact path="/:page" component={PageRender} />
          <PrivateRouter exact path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
