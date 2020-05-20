import React from 'react'
import Auth from '../../auth';
import OperationNav from '../../components/Nav/OperationNav';
import AccountNav from '../../components/Nav/AccountNav';
import AccountingNav from '../../components/Nav/AccountingNav';
import TreasuryNav from '../../components/Nav/TreasuryNav';
import DefaultNav from '../../components/Nav/DefaultNav';


class SideBar extends React.Component {
    
   
    render(){
        switch(Auth.uerType){
            case '8':
                return (
                    <div>     
                        <OperationNav/>
                    </div>
                );
                break;
            case '6':  
                return (
                    <div>     
                        <AccountingNav/>
                    </div>
                );
                break;
            case '7':
                return (
                    <div>     
                        <TreasuryNav/>
                    </div>
                );
                break;
            case '9':
                return (
                    <div>     
                        <AccountNav/>
                    </div>
                );
                break;
            default:
            return(
                <div>
                    <DefaultNav/>
                </div>
            );
        }
        
    }
    

}
 
export default SideBar;