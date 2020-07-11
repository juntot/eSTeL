import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar'
// import '../../css/admin.css';
import { Redirect } from 'react-router-dom';
import DataTable from '../components/DataTable';
import DashBoardBanner from '../components/DashBoardBanner';
import SummaryGrid2 from '../components/SummaryGrid2';
import PlayerStatBar from '../components/PlayerStatBar';
import GameType from '../components/GameType';
import TopTenCombination from '../components/ToptenCombination';
import '../../css/LiveTrends.css';  
import Axios from 'axios';


const moment = window.moment.tz.setDefault('Asia/Manila');

// let _cancelAxios = '';


const CancelToken = Axios.CancelToken;
let cancel = '';
let _interval = '';

class LiveTrends extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isValid: false,
            summary_grid: {
                straight  : '',
                rumble    : '',
                total     : '',
                incoming  : '',
                sms_out   : '',
                email_out : '',
            },
            top_combination: [],
            cutoff: {},
            player_stat:{},
            dataSet: [],
            lastCountDataSet: 0,

        };

        this.child = React.createRef();
        this.handleChangeGameType = this.handleChangeGameType.bind(this);
    }
    handleChangeGameType(e){
        // return <Redirect to={{
        //     pathname: '/login',
        //     // state: {from: props.location}
        // }} />
        const {from} = this.props.location.state || {from: {pathname: e.target.value}};
        this.props.history.push(from);
    }
    dispTop10Combi(){
        return this.state.top_combination.map((data, key) => {
            return (
                <tr key={key}>
                    <td>{data.combination}</td>
                    <td>{data.gameid}</td>
                    <td>{data.countbet}</td>
                    <td>{data.straight}</td>
                    <td>{data.total}</td>
                </tr>
            );
        });
    }
    componentWillUnmount(){
        if(cancel != ''){
            cancel();
        }
        clearInterval(_interval);
     }
    componentDidMount(){
        let session_id = this.props.match.params.session_id;
        Axios.get('api/get_session/'+session_id)
        .then(res=>{
            if(res.data.length > 0)
            this.setState({isValid: res.data[0].session});
        })
        .catch(err=>console.log(err));
        
        
        $('select').formSelect();
        let date = moment('2020-05-14').format('YYYY-MM-DD');

        // _cancelAxios = Axios.CancelToken.source();

        _interval = setInterval(()=>{
            
                Axios.get('api/summary_grid/swer3', {
                    cancelToken: new CancelToken(function executor(c) {
                        // An executor function receives a cancel function as a parameter
                        cancel = c;
                      })
                })
                .then(res => {
                    if(res.data.length > 0)
                    {
                        this.setState({summary_grid: res.data[0]});
                    }   
                })
                .catch();


                // getCutoff
                Axios.get('api/get_cutoff/swer3',{
                    cancelToken: new CancelToken(function executor(c) {
                        // An executor function receives a cancel function as a parameter
                        cancel = c;
                      })
                })
                .then(res=>{
                    if(res.data.length > 0){
                        this.setState({cutoff: res.data[0]});
                    }
                })
                .catch(err=>console.log(err));
                
                // top10
                Axios.get('api/top_combi/swer3',{
                    cancelToken: new CancelToken(function executor(c) {
                        // An executor function receives a cancel function as a parameter
                        cancel = c;
                    })
                })
                .then(res=>{
                    if(res.data.length > 0){
                        this.setState({top_combination: res.data})
                    }
                });

                // Player Stat
                Axios.get('api/player_stat/swer3',{
                    cancelToken: new CancelToken(function executor(c) {
                        // An executor function receives a cancel function as a parameter
                        cancel = c;
                    })
                })
                .then(res=>{
                    if(res.data.length > 0)
                    this.setState({player_stat: res.data[0]})
                })
                .catch(err=>console.log(err))

                // current transaction
                Axios.get('api/current_trans/swer3',{
                    cancelToken: new CancelToken(function executor(c) {
                        // An executor function receives a cancel function as a parameter
                        cancel = c;
                    })
                })
                .then(res=>{
                    if(res.data.length > 0)
                    {
                        if(this.state.lastCountDataSet != res.data.length){
                            this.setState({lastCountDataSet: res.data.length});
                            this.setState({dataSet: res.data});
                            this.child.current.resetTable(res.data);
                        }
                        
                    }
                    
                })
                .catch(err=>console.log(err))

            
        }, 3000);   

    }
    render(){
        if(!this.state.isValid){
            return <div/>
        }else{
        return(
            <div className="App">
                {/* <Header title="Dashboard"/> */}
                <article>
                    {/* <SideBar /> */}
                    <main className="liveTrend">
                        <div className="row padding-all-15 no-padding">
                            <div className="col s12 no-padding header-banner">
                                <DashBoardBanner title={"LIVE TRENDS SWER3"} cut_off={this.state.cutoff}/>
                            </div>
                            <div className="clearfix"></div>

                            <div className="row main">
                                    <div className="m-top-15 col s12">
                                        <div className="col s12 summary-grd-2">GAME TYPE</div>
                                        <GameType/>
                                    </div>
                                <div className="clearfix"></div>
                                    <div className="d-flex mobile-block desk-flex ho-flex">
                                        <div className="col m4 s12 m-top-15 push-height">
                                            <SummaryGrid2 val={this.state.summary_grid.straight} grd_label="Straight" hr_color="teal"/>
                                        </div>
                                                
                                        <div className="col m4 s12 m-top-15 push-height">
                                            <SummaryGrid2 val={this.state.summary_grid.rumble} grd_label="Rumble" hr_color="red" />
                                        </div>
                                                
                                        <div className="col m4 s12 m-top-15 push-height">
                                            <SummaryGrid2 val={this.state.summary_grid.total} grd_label="Total" hr_color="yellow"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="d-flex mobile-block desk-flex ho-flex">
                                        {/* sencond row */}
                                        <div className="col m4 s12 m-top-15">
                                            <SummaryGrid2 val={this.state.summary_grid.incoming} grd_label="Total In" hr_color="teal"/>    
                                        </div>
                                                
                                        <div className="col m4 s12 m-top-15">
                                            <SummaryGrid2 val={this.state.summary_grid.sms_out} grd_label="SMS Response" hr_color="red"/>
                                        </div>
                                                
                                        <div className="col m4 s12 m-top-15">
                                            <SummaryGrid2 val={this.state.summary_grid.email_out} grd_label="Email Response" hr_color="yellow"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="d-flex mobile-block">
                                        <div className="col xl4 l4 m12 s12 m-top-15">
                                            <div className="col s12 metronic-white-bg summary-grid push-height no-padding">
                                                <div className="summary-grd-2">
                                                        Player Statistic
                                                </div>
                                                <br/>
                                                <div className="col s12">
                                                    <div className="player-stat padding-sides-15">
                                                        <PlayerStatBar label="Total Player" total={this.state.player_stat.total_player || 0}/>
                                                        <PlayerStatBar percent_val={this.state.player_stat.total_player+'%'} label="Played" total={this.state.player_stat.total_player || 0}/>
                                                        <PlayerStatBar percent_val={this.state.player_stat.total_played+'%'} label="Player Login" total={this.state.player_stat.total_player || 0}/>
                                                        <PlayerStatBar percent_val={this.state.player_stat.total_login+'%'} label="Offline Player" total={this.state.player_stat.total_player || 0}/>
                                                        <PlayerStatBar percent_val={this.state.player_stat.total_newplayer+'%'} label="New Registered Player " total={this.state.player_stat.total_player || 0}/>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="col xl8 l8 m12 s12 m-top-15">
                                            <div className="col s12 metronic-white-bg summary-grid push-height no-padding top-combination-table">
                                                <div className="summary-grd-2">
                                                    TOP 10 COMBINATION
                                                </div>
                                                
                                              <table className="centered responsive-table">
                                                    <thead>
                                                    <tr>
                                                        <th>Combination</th>
                                                        <th>Game Type</th>
                                                        <th>Count Bets</th>
                                                        <th>Total Straight</th>
                                                        <th>Total Bets</th>
                                                    </tr>
                                                    </thead>

                                                    <tbody>
                                                        {this.dispTop10Combi()}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* datatable winners */}
                                    <div className="clearfix"></div>
                                    <div className="d-flex mobile-block">
                                        <div className="col s12 m-top-15">
                                            <div className="col s12 metronic-white-bg summary-grid push-height no-padding top-combination-table">
                                                <div className="summary-grd-2">
                                                    TOP 100 CURRENT TRANSACTIONS
                                                </div>
                                                <DataTable DataSet={this.state.dataSet} ref={this.child} />
                                              {/* <table className="centered responsive-table">
                                                    <thead>
                                                        <tr>
                                                            <th>ACCNT #</th>
                                                            <th>TRANS #</th>
                                                            <th>CATEGORY</th>
                                                            <th>COMBINATION</th>
                                                            <th>STRAIGHT</th>
                                                            <th>RUMBLE</th>
                                                            <th>DATE POSTED</th>
                                                            <th>SMS</th>
                                                            <th>EMAIL</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                        </tr>
                                                        <tr>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                            <td>the quick brown</td>
                                                        </tr>
                                                    </tbody>
                                                </table> */}
                                            </div>
                                        </div>
                                    </div>

                            </div>
                            {/* end main */}


                        </div>
                    </main>
                </article>
            </div>
        );
                                            }
    }
}

export default LiveTrends;