import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageRender from "./PageRender";
// import HomePage from "./pages/HomePage";
// import Login from "./pages/login";
// import NotFoundPage from "./pages/NotFoundPage";
// import Register from "./pages/register";

function App() {
  return (
    <Router>
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
          <Switch>
            {/* <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={NotFoundPage} /> */}
            <Route exact path="/:page" component={PageRender} />
            <Route exact path="/:page/:id" component={PageRender} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
