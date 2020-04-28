import React from 'react';
import Header from '../../layout/admin/Header'
import SideBar from '../../layout/admin/SideBar'
import '../../../css/admin.css';
import DataTable from '../../components/DataTable';


class BallDraw2 extends React.Component{

    render(){
        return(
            <div className="App">
                <Header title="Swer 2"/>
                <article>
                    <SideBar />
                    <main>
                        <div className="row padding-all-15">
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg dashboard-header">
                                    <div className="center-align">
                                        <h5><b>LIVE TRENDS ALL GAMES</b></h5>
                                        <p>
                                            MARCH 23, 2020 - 11AM<br/>
                                            CUTOFF TIME 10:50:00 AM - 11:30:00 AM<br/>
                                            Sat Apr 25 2020 5:29:57 PM<br/>
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="clearfix"></div>
                            <div className="d-flex">
                                <div className="col s4 m-top-15">
                                    <div className="colx s12 metronic-white-bg summary-grid push-height">
                                        <span>30</span>
                                        <hr className="summary-line teal"/>
                                        Straight
                                    </div>
                                </div>
                                        
                                <div className="col s4 m-top-15">
                                    <div className="colx s12 metronic-white-bg summary-grid push-height">
                                        <span>30</span>
                                        <hr className="summary-line red"/>
                                        Rumble
                                    </div>
                                </div>
                                        
                                <div className="col s4 m-top-15">
                                    <div className="colx s12 metronic-white-bg summary-grid push-height">
                                        <span>30</span>
                                        <hr className="summary-line yellow"/>
                                        Total
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                {/* sencond row */}
                                <div className="col s4 m-top-15">
                                    <div className="colx s12 metronic-white-bg summary-grid push-height">
                                        <span>30</span>
                                        <hr className="summary-line teal"/>
                                        Total In
                                    </div>
                                </div>
                                        
                                <div className="col s4 m-top-15">
                                    <div className="colx s12 metronic-white-bg summary-grid push-height">
                                        <span>30</span>
                                        <hr className="summary-line red"/>
                                        SMS Response
                                    </div>
                                </div>
                                        
                                <div className="col s4 m-top-15">
                                    <div className="colx s12 metronic-white-bg summary-grid push-height">
                                        <span>30</span>
                                        <hr className="summary-line yellow"/>
                                        Email Response
                                    </div>
                                </div>
                            </div>
                            
                            <div className="clearfix"></div>
                            <div className="d-flex mobile-block">
                                <div className="col m4 s12 m-top-15">
                                    <div className="col s12 metronic-white-bg summary-grid push-height">
                                        <p>Player Statistic</p>
                                        <div className="player-stat">
                                            Total Player
                                            <span>
                                                <span></span>
                                            </span>
                                            1.17 % Played
                                            <span>
                                                <span></span>
                                            </span>
                                            1.17 % Player Login
                                            <span>
                                                <span></span>
                                            </span>
                                            98.53 % Offline Player
                                            <span>
                                                <span></span>
                                            </span>
                                            0 New Registered Player
                                            <span>
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col m8 s12 m-top-15">
                                    <div className="col s12 metronic-white-bg summary-grid push-height">
                                        <p>Top 10 Combination</p>
                                        <div>
                                            <table className="highlight responsive-table">
                                                <thead>
                                                <tr>
                                                    <th>COMBINATION</th>
                                                    <th>GAME TYPE</th>
                                                    <th>COUNT BETS</th>
                                                    <th>TOTAL STRAIGHT</th>
                                                    <th>TOTAL RUMBLE</th>
                                                    <th>TOTAL BETS</th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                <tr>
                                                    <td>Alvin</td>
                                                    <td>Eclair</td>
                                                    <td>$0.87</td>
                                                    <td>$0.87</td>
                                                    <td>$0.87</td>
                                                    <td>$0.87</td>
                                                </tr>
                                                <tr>
                                                    <td>Alan</td>
                                                    <td>Jellybean</td>
                                                    <td>$3.76</td>
                                                    <td>$0.87</td>
                                                    <td>$0.87</td>
                                                    <td>$0.87</td>
                                                </tr>
                                                <tr>
                                                    <td>Jonathan</td>
                                                    <td>Lollipop</td>
                                                    <td>$7.00</td>
                                                    <td>$0.87</td>
                                                    <td>$0.87</td>
                                                    <td>$0.87</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                             {/* datatable winners */}
                             <div className="col s12 m-top-15">
                                 <div className="metronic-white-bg summary-grid">
                                     <div>Winners of today's draw</div>
                                     <DataTable/>
                                 </div>
                             </div>
                            
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}

export default BallDraw2;