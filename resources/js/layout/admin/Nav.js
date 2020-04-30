import React from 'react'
import Auth from '../../auth'
import {withRouter} from 'react-router-dom'
const $ = window.$;
const Nav = (props) =>{
        

         document.addEventListener('DOMContentLoaded', function() {

            let elems = document.querySelectorAll('.dropdown-trigger');
            let options = {
                constrainWidth: false,
                inDuration: 0,
                outDuration: 300,
            }
            M.Dropdown.init(elems, options);



            elems = document.querySelectorAll('.modal');
            M.Modal.init(elems, {
                container: 'body'
            });
        });
        
        let logout = (e) =>{
                Auth.logout(()=>{
                    props.history.push('/login');
                });
        }
        
        return (
            <nav> 
                <div className="nav-wrapper padding-sides-15">
                    <div className="row">
                        <div className="col s12 m12 l12 xl 12">
                            <ul id="nav-mobile" className="left hide-on-large-only">
                                <li>
                                    <a href="/#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                                </li>
                                
                                <li>
                                    <a href="/#" className="hide-on-large-only"><i className="material-icons">cloud</i></a>
                                </li>
                            </ul>
                            <ul className="left hide-on-med-and-down">
                                <li>{props.title}</li>
                            </ul>
                            {/* <ul className="right hide-on-med-and-down"> */}
                            <ul className="right">
                                {/* <li><a className='dropdown-trigger button-small' href='/#' data-target='dropdown1'>aws</a></li>
                                <li><a href="/#"><i className="material-icons">search</i></a></li>
                                <li><a href="/#"><i className="material-icons">view_module</i></a></li> */}
                                <li><a className='dropdown-trigger button-small waves-effect' href='/#' data-target='dropdown1'>Hi, Sean</a></li>
                            </ul>
                        </div>
                        {/* <div style="clear:both;"></div> */}
                    </div>
                      
                </div> 
                {/* <!-- Dropdown Structure --> */}
                <div id='dropdown1' className='dropdown-content profile'>
                    <div className="col s12 panel-banner">
                        <div className="dropdown-banner">
                            <div className="valign-wrapper">
                                <div className="col s4 mob-padd-15">
                                    <img src={'public/imgs/profile.jpg'} alt="" className="circle responsive-img v-align-middle" /> 
                                </div>
                                <div className="col s8 mob-padd-15">
                                <span className="white-text text-darken-2">
                                    <div className="profile-details">
                                        <span>Sean Lee</span><br/>
                                        <span className="hide-on-small-only">
                                            <a className="padding-sides-0 white-text modal-trigger" href="#nav-modal-options">change password</a>
                                        </span>
                                    </div>
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="waves-effect waves-light profile-option-links padding-sides-15 hide-on-med-and-up show-on-small">
                            <a className="padding-sides-0 white-text modal-trigger" href="#nav-modal-options">change password</a>
                        </div>
                    </div>
                    <div className="metronic-white-bg profile-options">
                        <button className="waves-effect waves-light btn margin-0 full-width text-normal" onClick={(e)=>{logout(e)}}>Logout</button>
                    </div>
                </div>
               
                <div id="nav-modal-options" className="modal modal-fixed-footer modal modal-fixed-footer modal-game-profile">
                    <div className="modal-content">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="old_pass" type="text"/>
                                <label htmlFor="old_pass">Old Password</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="old_pass" type="text"/>
                                <label htmlFor="old_pass">New Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            Save
                        </button>
                    </div>
                </div>
                
            </nav>
        );
}
 
export default withRouter(Nav);