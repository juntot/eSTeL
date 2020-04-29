import React from 'react'
import Auth from '../../auth';
import OperationNav from '../../components/Nav/OperationNav';
import AccountNav from '../../components/Nav/AccountNav';
import AccountingNav from '../../components/Nav/AccountingNav';
import TreasuryNav from '../../components/Nav/TreasuryNav';


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
            case 'accounting':  
                return (
                    <div>     
                        <AccountingNav/>
                    </div>
                );
                break;
            case 'treasury':
                return (
                    <div>     
                        <TreasuryNav/>
                    </div>
                );
                break;
            case 'accounts':
                return (
                    <div>     
                        <AccountNav/>
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