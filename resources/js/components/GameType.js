import React, { useState, useEffect } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
const GameType = (props) => {
    
    let location = useLocation();
    const [defaultPath, setDefaultPath] = useState(location.pathname);
    let handleChangeGameType = (e) => {
        // return <Redirect to={{
        //     pathname: '/login',
        //     // state: {from: props.location}
        // }} />
        const {from} = props.location.state || {from: {pathname: e.target.value}};
        props.history.push(from);
    }
  
    useEffect(() => {
        $('select').formSelect();
      }, []);
     
    return ( 
        <div className="col s12 metronic-white-bg">
            <div className="padding-sides-15">
                <div className="input-field m-select-option">
                    <select onChange={handleChangeGameType} value={defaultPath}>
                        <option value="" disabled >Choose your option</option>
                        <option value={"/"+props.match.params.db+"/swer3/"+props.match.params.session_id}>SWER3</option>
                        <option value={"/"+props.match.params.db+"/swer2/"+props.match.params.session_id}>SWER2</option>
                        <option value={"/"+props.match.params.db+"/pares/"+props.match.params.session_id}>PARES</option>
                        <option value={"/"+props.match.params.db+"/all/"+props.match.params.session_id}>ALL</option>
                    </select>
                </div>
            </div>
        </div>
     );
}
 
export default withRouter(GameType);