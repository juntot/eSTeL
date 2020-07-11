import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useLocation
} from "react-router-dom";

import {ProtectedRoute} from './protected_route';
import {PageNotFound} from './views/PageNotFound';
import LiveTrends from "./views/LiveTrends";
import LiveTrendsSwer2 from "./views/LiveTrendsSwer2";
import LivetrendsPares from "./views/LiveTrendsPares";
import LivetrendsAll from "./views/LiveTrendsAll";
import Axios from "axios";
import '../css/Loader.css';  
// import '../../resources'
import '../css/datatablehelper.css'
import '../css/admin.css';
import '../css/LiveTrends.css'

function App(props) {
  let location = useLocation();
  
  // const [defaultPath, setDefaultPath] = useState(location.pathname);
  const[isValid, setIsValid] = useState(false);
  useEffect(() => {
        document.body.classList.add('loader');
        let session_id = (location.pathname).split('/');
        session_id = session_id[session_id.length-1];

        Axios.get('api/get_session/'+session_id)
        .then(res=>{
            if(res.data.length > 0){
              if(res.data[0].session)
              document.body.classList.remove('loader');
              setIsValid(res.data[0].session);
            }
              
        })
        .catch(err=>console.log(err));
      
    
  }, []);
  if(!isValid){
    return(
      <div className="center-align padding-all-15 vh-100">
          <div id="container" className="loader">
            <div className="divider loader" aria-hidden="true"></div>
            <p className="loading-text loader" aria-label="Loading">
              <span className="letter loader" aria-hidden="true">L</span>
              <span className="letter loader" aria-hidden="true">o</span>
              <span className="letter loader" aria-hidden="true">a</span>
              <span className="letter loader" aria-hidden="true">d</span>
              <span className="letter loader" aria-hidden="true">i</span>
              <span className="letter loader" aria-hidden="true">n</span>
              <span className="letter loader" aria-hidden="true">g</span>
            </p>
          </div>
      </div>
    )
  }else{

  
  return (
    // <Router basename="/stl">
    <Router basename="/livetrends">
        <div>
        <Switch>
          <Route exact path="/:db/swer3/:session_id" component={LiveTrends} />
          {/* <Route exact path="/swer3/:session_id" render={(props) => <LiveTrends {...props} securitykey={'sekey'} />}/> */}
          <Route exact path="/:db/swer2/:session_id" component={LiveTrendsSwer2} / >
          <Route exact path="/:db/pares/:session_id" component={LivetrendsPares} / >
          <Route exact path="/:db/all/:session_id" component={LivetrendsAll} / >

          {/* <Route path="/location" component={Location} /> */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );


  }
}

export default withRouter(App);
