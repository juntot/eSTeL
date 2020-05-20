import React from 'react';
import Header from '../../layout/admin/Header'
import SideBar from '../../layout/admin/SideBar'
import '../../../css/admin.css';
import DataTable from '../../components/DataTable';
import DashBoardBanner from '../../components/DashBoardBanner';
import SummaryGrid from '../../components/SummaryGrid';
import PlayerStatBar from '../../components/PlayerStatBar';
import TopTenCombination from '../../components/ToptenCombination';


class AllDraw extends React.Component{


    componentDidMount(){
        
    }
    render(){
        return(
            <div className="App">
                <Header title="All Draw"/>
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
                                    <SummaryGrid val="90" grd_label="Straight" hr_color="teal"/>
                                </div>
                                <div className="col s4 m-top-15">
                                    <SummaryGrid val="30" grd_label="Rumble" hr_color="red" />
                                </div>
                                        
                                <div className="col s4 m-top-15">
                                    <SummaryGrid val="55" grd_label="Total" hr_color="yellow"/>
                                </div>
                            </div>
                            <div className="d-flex">
                                {/* sencond row */}
                                <div className="col s4 m-top-15">
                                    <SummaryGrid val="8" grd_label="Straight" hr_color="teal"/>
                                </div>
                                <div className="col s4 m-top-15">
                                    <SummaryGrid val="10" grd_label="Rumble" hr_color="red" />
                                </div>
                                        
                                <div className="col s4 m-top-15">
                                    <SummaryGrid val="65" grd_label="Total" hr_color="yellow"/>
                                </div>
                            </div>
                            
                            <div className="clearfix"></div>
                            <div className="d-flex mobile-block">
                                <div className="col m4 s12 m-top-15">
                                    <div className="col s12 metronic-white-bg summary-grid push-height">
                                        <p>Player Statistic</p>
                                        <div className="player-stat">
                                            <div className="player-stat">
                                                <PlayerStatBar label="Total Player" total="341"/>
                                                <PlayerStatBar percent_val="30" label="Played" total="341"/>
                                                <PlayerStatBar percent_val="35" label="Player Login" total="341"/>
                                                <PlayerStatBar percent_val="50" label="Offline Player" total="341"/>
                                                <PlayerStatBar percent_val="90" label="New Registered Player " total="341"/>
                                            </div>
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

export default AllDraw;