import React from 'react'
import Auth from '../../auth';
import OperationNav from '../../components/Nav/OperationNav';


class SideBar extends React.Component {
    
   
    render(){
        switch(Auth.userType){
            case 'operation':
                return (
                    <div>     
                        <OperationNav/>
                    </div>
                );
                break;
            default:
            return(
                <div></div>
            );
        }
        
    }
    

}
 
export default SideBar;