import React from 'react';

const SummaryGrid2 = (props) => {
    return ( 
        <div className="colx s12 metronic-white-bg summary-grid push-height no-padding">
            <div className="col s12 summary-grd-2">{props.grd_label || ''}</div>
            <div className="summary-grd-text-content center-align">
                <span>{props.val || '0'}</span>
            </div>
            
        </div>
     );
}
 
export default SummaryGrid2;
