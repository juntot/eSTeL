import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar'
import '../../css/admin.css';
import { Redirect } from 'react-router-dom';
import DataTable from '../components/DataTable';


class Home extends React.Component{


    componentDidMount(){
        // line graph for number of bets
        // gren rgba(76,175,80, 0.1)
        // red rgba(211,47,47, 0.1)
        // yellow rgba(249,168,37, 0.1)
        // cyan rgba(0,229,255, 0.1)
        // navy rgba(1,87,155, 0.1)
        let lineOption = {
            type: 'line',
            data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              datasets: [
                  {
                    label: 'branch 1',
                    data: [12, 19, 3, 5, 2, 3, 8, 14, 6, 11, 3, 17],
                    borderWidth: 1,
                    backgroundColor: "rgba(0,229,255, 0.1)",
                    
                  },	
                  {
                    label: 'branch 2',
                    data: [7, 11, 5, 8, 3, 7, 12, 4, 8, 10, 3, 12],
                    borderWidth: 1,
                    backgroundColor: "rgba(76,175,80, 0.1)",
                  }
              ],
              
              
            },
            options: {
                scales: {
                  yAxes: [{
                  ticks: {
                              reverse: false
                  }
                }]
              },
              legend: {
                  display: true
              }
            }
          }
        // end line

        // doughnut graph for annual sales
        let doughnutOption = {
            type: 'doughnut',
            data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: ["#d32f2f", "#01579b","#5d78ff","#f9a825","#4caf50"],
                  data: [2478, 5267, 734, 1684, 633]
                }
              ]
            },
            options: {
              title: {
                display: true,
                // text: 'Predicted world population (millions) in 2050',
                
              },
              legend: {
                display: false
              },
              maintainAspectRatio: false
            },
            
        }

        let lineGraph = document.getElementById('chartJSContainer-line-graph').getContext('2d');
        let doughnutGraph = document.getElementById("doughnut-chart-anual-sales");
        let parents = document.getElementById("dough-graph-wrap");
        // doughnutOption.width = parents.offsetWidth - 220;
        // doughnutGraph.height = parents.offsetWidth - 220;
       
        new Chart(lineGraph, lineOption);
        new Chart(doughnutGraph,doughnutOption );
    }
    render(){
        return(
            <div className="App">
                <Header title="Dashboard"/>
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
                                {/*line graph  */}
                                <div className="col m8 s12 m-top-15">
                                    <div className="metronic-white-bg summary-grid push-height">
                                        <p>Number of bets</p>
                                        <canvas id="chartJSContainer-line-graph" ></canvas>
                                    </div>
                                    
                                </div>

                                {/* yearly sales */}
                                <div className="col m4 s12 m-top-15">
                                    <div id="dough-graph-wrap" className="metronic-white-bg summary-grid push-height doughnut-parent-container relative">
                                        <p className="center-align doughnut-title">{"Annual sales: " + new Date().getFullYear()}</p>
                                        <canvas id="doughnut-chart-anual-sales"></canvas>
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

export default Home;