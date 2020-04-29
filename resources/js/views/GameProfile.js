import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar';

class GameProfile extends React.Component{
    componentDidMount() {
        // document.addEventListener('DOMContentLoaded', function() {
        let elems = document.querySelectorAll('select');
        let instances = M.FormSelect.init(elems);

        elems = document.querySelectorAll('.timepicker');
        instances = M.Timepicker.init(elems,{
            defaultTime: 'now'
        });
        // console.log(instances);
        instances.forEach((item, index)=>{
            instances[index]._updateTimeFromInput();
            instances[index].done();
        })

        // modal
        elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
        // });
    }
    render(){
        return(
            <div className="App">
                <Header title="Game Profile" />
                <article>
                    <SideBar/>
                    <main>
                        <div className="row padding-all-15 padding-top-0">
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <p>Game type</p>
                                    <div className="input-field col s12 m-select-option">
                                        <select>
                                            <option value="" disabled defaultValue>Choose your option</option>
                                            <option value="1">STL SWER 3</option>
                                            <option value="2">STL SWER 2</option>
                                            <option value="3">STL PARES</option>
                                        </select>
                                        <label></label>
                                    </div>
                                </div>
                                <div className="col s12 metronic-white-bg m-top-15 padding-bottom-default l-gradient">
                                    <div className="relative">
                                        <p className="white-text">Cut-Off</p>
                                        <br/>
                                        <div className="col m4 s12">
                                            <div className="col s12 metronic-white-bg z-depth-1 padding-all-rem-15 m-top-15">
                                                <label>11AM</label>
                                                <div>
                                                    <div className="input-field">
                                                        <input type="text" className="timepicker"/>
                                                        <label htmlFor="textarea1"></label>
                                                    </div>
                                                    <div className="input-field">
                                                        <input type="text" className="timepicker"/>
                                                        <label htmlFor="textarea1"></label>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="col m4 s12">
                                            <div className="col s12 metronic-white-bg z-depth-1 padding-all-rem-15 m-top-15">
                                                <label>4PM</label>
                                                <div>
                                                    <div className="input-field s12">
                                                        <input type="text" className="timepicker"/>
                                                        <label htmlFor="textarea1"></label>
                                                    </div>
                                                    <div className="input-field">
                                                        <input type="text" className="timepicker"/>
                                                        <label htmlFor="textarea1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col m4 s12">
                                            <div className="col s12 metronic-white-bg z-depth-1 padding-all-rem-15 m-top-15">
                                                <label>9PM</label>
                                                <div>
                                                    <div className="input-field">
                                                        <input type="text" className="timepicker"/>
                                                        <label htmlFor="textarea1"></label>
                                                    </div>
                                                    <div className="input-field">
                                                        <input type="text" className="timepicker"/>
                                                        <label htmlFor="textarea1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="col s12 metronic-white-bg m-top-15 padding-bottom-default">
                                    <p>Limit per combination</p><br/>
                                    <button data-target="modal1" className="btn modal-trigger">Add New</button>
                                    <br/>
                                    <div>
                                        <table className="highlight responsive-table">
                                            <thead>
                                            <tr>
                                                <th>Combination</th>
                                                <th>Straight</th>
                                                <th>Rumble</th>
                                                <th className="right-align operation">Operation</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr>
                                                <td>Alvin</td>
                                                <td>Eclair</td>
                                                <td>$0.87</td>
                                                <td className="right-align operation">
                                                    <a className="btn-floating pulse red darken-3">
                                                        <i className="material-icons">delete</i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Alan</td>
                                                <td>Jellybean</td>
                                                <td>$3.76</td>
                                                <td className="right-align operation">
                                                    <a className="btn-floating pulse red darken-3">
                                                        <i className="material-icons">delete</i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Jonathan</td>
                                                <td>Lollipop</td>
                                                <td>$7.00</td>
                                                <td className="right-align operation">
                                                    <a className="btn-floating pulse red darken-3">
                                                        <i className="material-icons">delete</i>
                                                    </a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* SOLD OUT COMBI */}
                                <div className="col s12 metronic-white-bg m-top-15 padding-bottom-default">
                                    <p>Soldout combination</p><br/>
                                    
                                    <button data-target="modal2" className="btn modal-trigger">Add New</button>
                                    <br/>
                                    <div>
                                        <table className="highlight responsive-table">
                                            <thead>
                                            <tr>
                                                <th>Combination</th>
                                                <th>Straight</th>
                                                <th>Rumble</th>
                                                <th className="right-align operation">Operation</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr>
                                                <td>Alvin</td>
                                                <td>Eclair</td>
                                                <td>$0.87</td>
                                                <td className="right-align operation">
                                                    <a className="btn-floating pulse red darken-3">
                                                        <i className="material-icons">delete</i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Alan</td>
                                                <td>Jellybean</td>
                                                <td>$3.76</td>
                                                <td className="right-align operation">
                                                    <a className="btn-floating pulse red darken-3">
                                                        <i className="material-icons">delete</i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Jonathan</td>
                                                <td>Lollipop</td>
                                                <td>$7.00</td>
                                                <td className="right-align operation">
                                                    <a className="btn-floating pulse red darken-3">
                                                        <i className="material-icons">delete</i>
                                                    </a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <br/>
                                    <div className="input-field col m12 s12  padding-sides-0 right-align operation">
                                        <button className="btn waves-effect waves-light" type="submit" name="action">
                                            Save
                                            <i className="material-icons left">cloud_upload</i>
                                        </button>                            
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* limit per combi modal */}
                        <div id="modal1" className="modal modal-fixed-footer modal-game-profile">
                            <div className="modal-content">
                                <div className="row">
                                    <div className="col m4 no-padding">
                                        <div className="input-field col s12">
                                            <input id="straight" type="text" className="validate" />
                                            <label htmlFor="straight">Straight</label>
                                           
                                        </div>
                                    </div>
                                    <div className="col m4 no-padding">
                                        <div className="input-field col s12">
                                            <input id="rumble" type="text" className="validate" />
                                            <label htmlFor="rumble">Rumble</label>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    
                                    <div className="col m4 no-padding">
                                        <div className="input-field col s12">
                                            <input id="ball1" placeholder="0" type="text" className="validate" />
                                            <label htmlFor="ball1">1rst Ball</label>
                                        </div>
                                    </div>
                                    <div className="col m4 no-padding">
                                        <div className="input-field col s12">
                                            <input id="ball2" placeholder="0" type="text" className="validate" />
                                            <label htmlFor="ball2">2nd Ball</label>
                                        </div>
                                    </div>
                                    <div className="col m4 no-padding">
                                        <div className="input-field col s12">
                                            <input id="ball3" placeholder="0" type="text" className="validate" />
                                            <label htmlFor="ball3">3rd Ball</label>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                
                            </div>
                            <div className="modal-footer">
                                <button className="btn">Add</button>
                            </div>
                        </div>
                          
                        {/* limit soldout modal */}
                        <div id="modal2" className="modal modal-fixed-footer modal-game-profile">
                            <div className="modal-content">
                                <br/>
                                <div className="row">
                                    <div className="col m4 no-padding">
                                        <div className="input-field col s12">
                                            <input id="ball11" placeholder="0" type="text" className="validate" />
                                            <label htmlFor="ball11">1rst Ball</label>
                                        </div>
                                    </div>
                                    <div className="col m4 no-padding">
                                        <div className="input-field col s12">
                                            <input id="ball22" placeholder="0" type="text" className="validate" />
                                            <label htmlFor="ball22">2nd Ball</label>
                                        </div>
                                    </div>
                                    <div className="col m4 no-padding">
                                        <div className="input-field col s12">
                                            <input id="ball33" placeholder="0" type="text" className="validate" />
                                            <label htmlFor="ball33">3rd Ball</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn">Add</button>
                            </div>
                        </div>

                            {/* 
                                    <div className="clearfix"></div> */}
                    </main>
                </article>
            </div>
        );
    }
}
export default GameProfile;