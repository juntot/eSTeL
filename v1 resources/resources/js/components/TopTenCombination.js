import React from 'react';

const TopTenCombination = (props) => {
    const header  = props.header.map((data, key)=>{
        return (
            <th key={key}>
                {data.title} 
            </th>
        );
    });
    const td_rec = (obj)=>{
        return props.header.map((data, key)=>{
            return(
                <td key={key}>
                    {obj[data.data]}
                </td>
            )
        });
    }
    const tbl_data = props.data.map((data, key)=>{
        return(
            <tr key={key}>
                {td_rec(data)}
            </tr>
            
        )
    });
    return ( 
        <div>
            <p>{props.title || ''}</p>
            <div>
                <table className="highlight responsive-table">
                    <thead>
                    <tr>
                        {header || ''}
                    </tr>
                    </thead>

                    <tbody>
                        {tbl_data || ''}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default TopTenCombination;


