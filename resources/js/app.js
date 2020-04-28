import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';
import Employee from './views/Employee';
import Location from './views/Location';
import {ProtectedRoute} from './protected_route';
import {PageNotFound} from './views/PageNotFound';
import GameProfile from "./views/GameProfile";;
import ResultPosting from "./views/ResultPosting";
import LiveStream from "./views/LiveStream";
import TextBlast from "./views/TextBlast";
import BallDraw3 from "./views/sub-views/BallDraw3";
import Pares from "./views/sub-views/Pares";
import BallDraw2 from "./views/sub-views/BallDraw2";
import AllDraw from "./views/sub-views/AllDraw";


function App() {
  return (
    
    // <Router basename="/stl">
    <Router basename="/stl">
        <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute path="/game-profile" component={GameProfile} />
          <ProtectedRoute path="/result-posting" component={ResultPosting} />
          <ProtectedRoute path="/employee" component={Employee} />
          <ProtectedRoute path="/livestream" component={LiveStream} />
          <ProtectedRoute path="/text-blast" component={TextBlast} />
          <ProtectedRoute path="/pares" component={Pares} />
          <ProtectedRoute path="/ball2" component={BallDraw2} />
          <ProtectedRoute path="/ball3" component={BallDraw3} />
          <ProtectedRoute path="/all-draw" component={AllDraw} />
          <Route path="/location" component={Location} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
