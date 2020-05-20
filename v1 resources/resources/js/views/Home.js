import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar'
import '../../css/admin.css';
import { Redirect } from 'react-router-dom';
import DataTable from '../components/DataTable';
import DashBoardBanner from '../components/DashBoardBanner';
import SummaryGrid from '../components/SummaryGrid';
import PlayerStatBar from '../components/PlayerStatBar';
import TopTenCombination from '../components/ToptenCombination';


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
                                <DashBoardBanner/>
                            </div>
                            <div className="clearfix"></div>
                            <div className="d-flex">
                                <div className="col s4 m-top-15">
                                    <SummaryGrid val="35" grd_label="Straight" hr_color="teal"/>
                                </div>
                                        
                                <div className="col s4 m-top-15">
                                    <SummaryGrid val="40" grd_label="Rumble" hr_color="red" />
                                </div>
                                        
                                <div className="col s4 m-top-15">
                                    <SummaryGrid val="15" grd_label="Total" hr_color="yellow"/>
                                </div>
                            </div>
                            <div className="d-flex">
                                {/* sencond row */}
                                <div className="col s4 m-top-15">
                                    <SummaryGrid val="35" grd_label="Total In" hr_color="teal"/>    
                                </div>
                                        
                                <div className="col s4 m-top-15">
                                    <SummaryGrid val="45" grd_label="SMS Response" hr_color="red"/>
                                </div>
                                        
                                <div className="col s4 m-top-15">
                                    <SummaryGrid val="25" grd_label="Email Response" hr_color="yellow"/>
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
                                        <br/>
                                        <div className="player-stat">
                                            <PlayerStatBar label="Total Player" total="341"/>
                                            <PlayerStatBar percent_val="30" label="Played" total="341"/>
                                            <PlayerStatBar percent_val="35" label="Player Login" total="341"/>
                                            <PlayerStatBar percent_val="50" label="Offline Player" total="341"/>
                                            <PlayerStatBar percent_val="90" label="New Registered Player " total="341"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col m8 s12 m-top-15">
                                    <div className="col s12 metronic-white-bg summary-grid push-height">
                                        <TopTenCombination title="Top 5 Combination" 
                                            header={[
                                                    {title: 'COMBINATION', data: 'combi'},
                                                    {title: 'GAME TYPE', data: 'type'},
                                                    {title: 'COUNT BETS', data: 'countbets'},
                                                    {title: 'TOTAL STRAIGHT', data: 'totalS'},
                                                    {title: 'TOTAL RUMBLE', data: 'totalR'},
                                                    {title: 'TOTAL BETS', data: 'totalB'},
                                                ]}
                                            data={[
                                                {combi: '3-0-1', type: 'Swer 3', countbets: 100, totalS: 40, totalR: 80, totalB: 900},
                                                {combi: '2-0-1', type: 'Swer 2', countbets: 100, totalS: 40, totalR: 80, totalB: 900},
                                                {combi: '1-0-1', type: 'Swer 3', countbets: 100, totalS: 40, totalR: 80, totalB: 900},
                                                {combi: '8-0-1', type: 'Swer 1', countbets: 100, totalS: 40, totalR: 80, totalB: 900},
                                                {combi: '9-0-1', type: 'Swer 3', countbets: 100, totalS: 40, totalR: 80, totalB: 900},
                                                
                                            ]}
                                            
                                        />
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