import React from 'react';

const PlayerStatBar = (props) => {
    const myStyle={
        width: ((props.percent_val || '').split("%", 1))+'%'
    }
    
    return ( 
        <div className="bar-wrap">
            <div className="padding-sides-0 col s10 player-stat-label bold">
                {(props.percent_val ? props.percent_val: '') +' '+(props.label || '')}    
            </div>
            <div className="padding-sides-0 col s2 right-align">
                {props.total || '0'}
            </div>
            <div className="clearfix"></div>
            <span style={{overflow: 'hidden'}}>
                <span style={myStyle}></span>
            </span>
        </div>
     );
}
 
export default PlayerStatBar;


