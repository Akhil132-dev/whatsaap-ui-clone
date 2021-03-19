import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    //BEM naming convention

    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar />
          <Switch>

            <Route path="/rooms/:roomid">
              <Chat />
            </Route>
            <Route exact path="/">
              <Chat />
            </Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
