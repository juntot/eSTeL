import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar';

class UserAccount extends React.Component {
    
    render() { 
        return ( 
            <div className="App">
                <Header title="User Accounts" />
                <article>
                    <SideBar/>
                    <main>
                        <div className="row padding-all-15 padding-top-0">
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <p>General Coordinator</p>
                                    <div>
                                        <table className="highlight responsive-table">
                                            <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Credit</th>
                                                <th>Commision</th>
                                                <th>Coordinators</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr>
                                                <td>Alvin</td>
                                                <td>Eclair</td>
                                                <td>$0.87</td>
                                                <td>$0.87</td>
                                            </tr>
                                            <tr>
                                                <td>Alan</td>
                                                <td>Jellybean</td>
                                                <td>$3.76</td>
                                                <td>$0.87</td>
                                            </tr>
                                            <tr>
                                                <td>Jonathan</td>
                                                <td>Lollipop</td>
                                                <td>$7.00</td>
                                                <td>$0.87</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <p className="col m4 s12 padding-left-0">
                                            Total Credit:
                                        </p>
                                        <p className="col m4 s12 padding-left-0">
                                            Total Commission:
                                        </p>
                                        <p className="col m4 s12 padding-left-0">
                                            Total Coordinators:
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="clearfix"></div> */}
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg m-top-15 padding-bottom-default banner-image">
                                    <div className="d-flex relative banner-image-wrap">
                                        <div className="col m6 s12">
                                            <div className="col s12 metronic-white-bg m-top-15 z-depth-1 push-height">
                                                <p>Coordinator</p>
                                                <div className="padding-bottom-default">
                                                    <table className="highlight responsive">
                                                        <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Credit</th>
                                                            <th>Commission</th>
                                                        </tr>
                                                        </thead>

                                                        <tbody>
                                                        <tr>
                                                            <td>Alvin</td>
                                                            <td>Eclair</td>
                                                            <td>$0.87</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Alan</td>
                                                            <td>Jellybean</td>
                                                            <td>$3.76</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jonathan</td>
                                                            <td>Lollipop</td>
                                                            <td>$7.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jonathan</td>
                                                            <td>Lollipop</td>
                                                            <td>$7.00</td>
                                                        </tr>
                                                        
                                                        </tbody>
                                                    </table>
                                                    <p className="col m4 s12 padding-left-0">
                                                        Total Cred: 
                                                    </p>
                                                    <p className="col m4 s12 padding-left-0">
                                                        Total Com: 
                                                    </p>
                                                    <p className="col m4 s12 padding-left-0">
                                                        Total Player: 
                                                    </p>
                                                    <br/>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="col m6 s12">
                                            <div className="col s12 metronic-white-bg m-top-15 z-depth-1 push-height">
                                                <p>Operator</p>
                                                <div className="padding-bottom-default">
                                                    <table className="highlight responsive">
                                                        <thead>
                                                        <tr>
                                                            <th>Operator</th>
                                                            <th>General Coor.</th>
                                                        </tr>
                                                        </thead>

                                                        <tbody>
                                                        <tr>
                                                            <td>Alvin</td>
                                                            <td>Eclair</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Alan</td>
                                                            <td>Jellybean</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jonathan</td>
                                                            <td>Lollipop</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <br/>
                                                </div>
                                            </div>
                                        </div>
                                    </div><br/> 
                                    
                                </div>
                            </div>
                            
                            
                            
                        </div>
                    </main>
                </article>
            </div>
         );
    }
}
 
export default UserAccount;