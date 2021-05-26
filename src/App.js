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

function App() {
  const { auth, status } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
  return (
    <Router>
      <AlertMsg />
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
          {auth.token && <Header />}
          {status && <StatusModal />}

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
