import React, { useEffect } from 'react';
import '../../css/not_found.css';  
export const PageNotFound = ()=> {

      useEffect(()=>{
        document.getElementById('root').classList.add('flex-404');
        // unmount
        return ()=>{
          document.getElementById('root').classList.remove('flex-404');
        }
    })

    return  <div style={{display: 'flex', height: '100%'}}>
                <div className="code" style={{
                  borderRight: '2px solid',
                  fontSize: '26px',
                  padding: '0 15px 0 15px',
                  textAlign: 'center'
                }}>
                    404            aws
                </div>
                <div className="message" style={{padding: '10px'}}>
                    Not Found            
                </div>
            </div>;
            
}
  
