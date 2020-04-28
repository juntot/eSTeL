import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar';

class GameProfile extends React.Component{

    render(){
        return(
            <div className="App">
                <Header title="Game Profile" />
                <article>
                    <SideBar/>
                    <main>
                        <div className="row padding-all-15">
                            <div className="col m7 metronic-white-bg">
                                <p>STL SWER3</p>
                                <div>
                                    <table className="highlight responsive-table">
                                        <thead>
                                        <tr>
                                            <th>DRAW</th>
                                            <th>FROM</th>
                                            <th>TO</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>11:00 AM</td>
                                                <td>10:50 AM</td>
                                                <td>11:30 AM</td>
                                            </tr>
                                            <tr>
                                                <td>04:00 PM</td>
                                                <td>03:50 PM</td>
                                                <td>04:30 PM</td>
                                            </tr>
                                            <tr>
                                                <td>09:00 PM</td>
                                                <td>06:50 PM</td>
                                                <td>09:30 PM</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col m5">
                                <div className="col s12 metronic-white-bg">
                                    metronic-white-bg
                                </div>
                            </div>
                            <div className="col m5 m-top-15">
                                <div className="col s12 metronic-white-bg">
                                metronic-white-bg
                                </div>
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}
export default GameProfile;