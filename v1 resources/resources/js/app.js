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
import PowerAppReport from "./views/PowerAppReport";
import WinningReport from "./views/WinningReport";
import CommissionReport from "./views/CommissionReport";
import RemittanceReport from "./views/RemittanceReport";
import WinningClaimedReport from "./views/WinningClaimedReport";
import UserAccount from "./views/UserAccount";
import SearchAccount from "./views/SearchAccount";
import LiveTrends from "./views/LiveTrends";

function App() {
  return (
    
    // <Router basename="/stl">
    <Router basename="/stl">
        <div>
        <Switch>
          <Route path="/login" component={Login} />
          
          <Route exact path="/" component={LiveTrends} />
          {/* <ProtectedRoute exact path="/" component={Home} /> */}
          
          {/* operation */}
          {/* <ProtectedRoute path="/game-profile" component={GameProfile} />
          <ProtectedRoute path="/result-posting" component={ResultPosting} />
          <ProtectedRoute path="/employee" component={Employee} />
          <ProtectedRoute path="/livestream" component={LiveStream} />
          <ProtectedRoute path="/text-blast" component={TextBlast} />
          <ProtectedRoute path="/pares" component={Pares} />
          <ProtectedRoute path="/ball2" component={BallDraw2} />
          <ProtectedRoute path="/ball3" component={BallDraw3} />
          <ProtectedRoute path="/all-draw" component={AllDraw} /> */}

          {/* accounting */}
          {/* <ProtectedRoute path="/power-app" component={PowerAppReport} />
          <ProtectedRoute path="/winning-report" component={WinningReport} /> */}
          
          {/* treasury */}
          {/* <ProtectedRoute path="/commission-report" component={CommissionReport} />
          <ProtectedRoute path="/remittance-report" component={RemittanceReport} />
          <ProtectedRoute path="/winning-claimed-report" component={WinningClaimedReport} /> */}

          {/* account */}
          {/* <Route path="/user-account" component={UserAccount} />
          <Route path="/search-account" component={SearchAccount} /> */}
          {/* <ProtectedRoute path="/user-account" component={UserAccount} />
          <ProtectedRoute path="/search-account" component={SearchAccount} /> */}

          {/* <Route path="/location" component={Location} /> */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
