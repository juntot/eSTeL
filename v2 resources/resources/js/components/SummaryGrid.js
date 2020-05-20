import React from 'react';

const SummaryGrid = (props) => {
    return ( 
        <div className="colx s12 metronic-white-bg summary-grid push-height">
            <span>{props.val || ''}</span>
            <hr className={"summary-line "+props.hr_color}/>
            {props.grd_label || ''}
        </div>
     );
}
 
export default SummaryGrid;
