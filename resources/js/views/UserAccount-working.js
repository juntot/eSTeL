import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar';
import Axios from 'axios';
import auth from '../auth';
import {error} from '../components/Toast';
import { useForm } from 'react-hook-form';
const { register, errors} = useForm({
    mode: 'onChange',
  });

let _operatorModal = '';
let elems = '';

    
class UserAccount extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            formdata:{
                operator_name: '',
            },
            gencoor:{
                
                // @@
                parmcompid: auth.compid, 
                parmbrcd: auth.brcd, 
                parmuserid: auth.userid, 
                parmrcompid: auth.compid, 
                parmrbrcd: auth.brcd, 
               
                parmusrmobno: '00000000002',
                parmusrfnm: 'krisxxxx',
                parmusrlnm: 'krivvsx',
                parmemladd: 'kris.tops@gmail.com',
                // @@
                parmgndr: 'M', 
                parmmtrlstat: 'S', 
                parmctznshp: 'F', 
                parmusertype: '3'
            },
            coor:{
                // @@
                parmcompid: auth.compid, 
                parmbrcd: auth.brcd, 
                parmuserid: auth.userid, 
                parmrcompid: auth.compid, 
                parmrbrcd: auth.brcd, 
               
                parmusrmobno: '00000000002',
                parmusrfnm: 'coor',
                parmusrlnm: 'coorlname',
                parmemladd: 'coor.tops@gmail.com',
                // @@
                parmgndr: 'M', 
                parmmtrlstat: 'S', 
                parmctznshp: 'F', 
                parmusertype: '4'
            },
            isUpdate: false,

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeGenCoor = this.handleChangeGenCoor.bind(this);
        this.addGenCoor = this.addGenCoor.bind(this);
        
        this.handleChangeCoor = this.handleChangeCoor.bind(this);
        this.addCoor = this.addCoor.bind(this);
        
    }
    
    // addOperator (){
        
    //     console.log(this.state);
    //     // Axios.post('api/add_operator', {})
    //     // .then()
    //     // .catch();
    // }
    // updateOperator(){

    // }
    // openOperatorModal(isUpdate = false){
    //     // this.setState({isUpdate: isUpdate});
    //     _operatorModal[1].open();
    //     document.querySelector('.modal-overlay').addEventListener('click',()=>_operatorModal[1].close());
    // }
    // func
    addGenCoor(e){
        // console.log(this.state.gencoor)
        Axios.post('api/add_gencoor', {
            ...this.state.gencoor
        }).then((res)=>{
            if(res.data.length > 0 && res.data[0].RESULT == '1')
            {
                this.reset();
                _operatorModal[2].close();
            }
        })
        .catch();
        
    }
    openGenCoorModal(){
        _operatorModal[2].open();
        document.querySelector('.modal-overlay').addEventListener('click',()=>_operatorModal[2].close());
    }
    handleChangeGenCoor(e){
        let name = e.target.name;
        this.setState({ gencoor:{...this.state.gencoor, [name] : e.target.value, } });
    }
    
    // func
    addCoor(e){
        // M.toast({html: 'I am a toast!'})
        error('awssz');
        // Toast.msg('mora tag buang');
        // <Toast message="asdf" />
    }
    openCoorModal(){
        _operatorModal[3].open();
        document.querySelector('.modal-overlay').addEventListener('click',()=>_operatorModal[3].close());
    }
    openCoorPlayerModal(){
        _operatorModal[3].open();
        document.querySelector('.modal-overlay').addEventListener('click',()=>_operatorModal[3].close());
    }
    handleChangeCoor(e){
        let name = e.target.name;
        this.setState({ coor:{...this.state.gencoor, [name] : e.target.value, } });
    }
    
    componentDidMount(){
        elems = document.querySelectorAll('.modal');
        _operatorModal = M.Modal.init(elems, {dismissible: true});
        M.updateTextFields();
    }
    handleChange(e){
        let name = e.target.name;
        this.setState({ gencoor:{...this.state.gencoor, [name] : e.target.value, } });
    }    
    reset(){
        this.setState({
            gencoor:{
                
                // @@
                parmcompid: auth.compid, 
                parmbrcd: auth.brcd, 
                parmuserid: auth.userid, 
                parmrcompid: auth.compid, 
                parmrbrcd: auth.brcd, 
               
                parmusrmobno: '',
                parmusrfnm: '',
                parmusrlnm: '',
                parmemladd: '',
                // @@
                parmgndr: 'M', 
                parmmtrlstat: 'S', 
                parmctznshp: 'F', 
                parmusertype: '3'
            },
            coor:{
                // @@
                parmcompid: auth.compid, 
                parmbrcd: auth.brcd, 
                parmuserid: auth.userid, 
                parmrcompid: auth.compid, 
                parmrbrcd: auth.brcd, 
               
                parmusrmobno: '',
                parmusrfnm: '',
                parmusrlnm: '',
                parmemladd: '',
                // @@
                parmgndr: 'M', 
                parmmtrlstat: 'S', 
                parmctznshp: 'F', 
                parmusertype: '4'
            },
            isUpdate: false,
        });
        
    }
    render() { 
        return ( 
            <div className="App">
                <Header title="User Accounts" />
                <article>
                    <SideBar/>
                    <main>
                        <div className="row padding-all-15 padding-top-0">
                            <div className="col s12">
                                {/*  */}
                            </div>
                            {/* <div className="clearfix"></div> */}
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg m-top-15 padding-bottom-default banner-image">
                                    <div className="d-flexx mobile-block relative banner-image-wrap">
                                        <div className="col m12 s12">
                                            <div className="col s12 metronic-white-bg m-top-15 z-depth-1 push-height">
                                                <p>General Coordinator</p>
                                                <div className="padding-bottom-default">
                                                    <div className="action right-align">
                                                        <button data-target="modal_gencoor" className="modal-trigger btn waves-effect waves-light" type="submit" name="action">
                                                            Add Gen. Coordinator
                                                        </button>
                                                    </div>
                                                    <br/>
                                                    <table className="highlight responsive-table">
                                                        <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Credit</th>
                                                            <th>Commision</th>
                                                            <th>Coordinators</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                        </thead>

                                                        <tbody>
                                                        <tr>
                                                            <td>Alvin</td>
                                                            <td>Eclair</td>
                                                            <td>$0.87</td>
                                                            <td>$0.87</td>
                                                            <td>
                                                                <div>
                                                                    <a className="dropdown-trigger btn-floating pulse red darken-3" data-target='dropdown3'>
                                                                        <i className="material-icons">settings</i>
                                                                    </a>
                                                                </div>
                                                                
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Alan</td>
                                                            <td>Jellybean</td>
                                                            <td>$3.76</td>
                                                            <td>$0.87</td>
                                                            <td>
                                                                <div>
                                                                    <a className="dropdown-trigger btn-floating pulse red darken-3" data-target='dropdown3'>
                                                                        <i className="material-icons">settings</i>
                                                                    </a>
                                                                </div>
                                                                
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <td>Jonathan</td>
                                                            <td>Lollipop</td>
                                                            <td>$7.00</td>
                                                            <td>$0.87</td>
                                                            <td>
                                                                <div>
                                                                    <a className="dropdown-trigger btn-floating pulse red darken-3" data-target='dropdown3'>
                                                                        <i className="material-icons">settings</i>
                                                                    </a>
                                                                </div>
                                                                
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    
                                                    <br/>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="col m12 s12">
                                            <div className="col s12 metronic-white-bg m-top-15 z-depth-1 push-height">
                                                <p>Coordinator</p>
                                                <div className="padding-bottom-default">
                                                    <div className="action right-align">
                                                        <button data-target="modal_coor" className="modal-trigger btn waves-effect waves-light" type="submit" name="action">
                                                            Add Coordinator
                                                        </button>
                                                    </div>
                                                    <br/>
                                                    <table className="highlight responsive-table">
                                                        <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Credit</th>
                                                            <th>Commission</th>
                                                            <th>
                                                                Actions
                                                                
                                                            </th>
                                                        </tr>
                                                        </thead>

                                                        <tbody>
                                                        <tr>
                                                            <td>Alvin</td>
                                                            <td>Eclair</td>
                                                            <td>$0.87</td>
                                                            <td>
                                                                <div>
                                                                    <a className="dropdown-trigger btn-floating pulse red darken-3" data-target='dropdown4'>
                                                                        <i className="material-icons">settings</i>
                                                                    </a>
                                                                </div>
                                                                
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Alan</td>
                                                            <td>Jellybean</td>
                                                            <td>$3.76</td>
                                                            <td>
                                                                <div>
                                                                    <a className="dropdown-trigger btn-floating pulse red darken-3" data-target='dropdown4'>
                                                                        <i className="material-icons">settings</i>
                                                                    </a>
                                                                </div>
                                                                
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jonathan</td>
                                                            <td>Lollipop</td>
                                                            <td>$7.00</td>
                                                            <td>
                                                                <div>
                                                                    <a className="dropdown-trigger btn-floating pulse red darken-3" data-target='dropdown4'>
                                                                        <i className="material-icons">settings</i>
                                                                    </a>
                                                                </div>
                                                                
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jonathan</td>
                                                            <td>Lollipop</td>
                                                            <td>$7.00</td>
                                                            <td>
                                                                <div>
                                                                    <a className="dropdown-trigger btn-floating pulse red darken-3" data-target='dropdown3'>
                                                                        <i className="material-icons">settings</i>
                                                                    </a>
                                                                </div>
                                                                
                                                            </td>
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
                                    </div><br/> 
                                    
                                </div>
                            </div>
                            
                            
                            
                        </div>
                    </main>
                </article>

                {/* Drop Down Operator Options*/}
                {/* <ul id='dropdown2' className='dropdown-content'>
                    <li><a href="#!" onClick={this.openOperatorModal}><i className="material-icons">view_module</i>Modify</a></li>
                </ul> */}
                {/* Drop Down General Operator Options*/}
                <ul id='dropdown3' className='dropdown-content'>
                    <li><a href="#!" onClick={this.openGenCoorModal}><i className="material-icons">view_module</i>Modify</a></li>
                    <li><a href="#!" ><i className="material-icons">cloud</i>Reset Pass</a></li>
                    <li><a href="#!" ><i className="material-icons">cloud</i>Block</a></li>
                </ul>
                {/* Drop Down Coordinator Operator Options*/}
                <ul id='dropdown4' className='dropdown-content'>
                    <li><a href="#!" onClick={this.openCoorModal}><i className="material-icons">view_module</i>Modify</a></li>
                    <li><a href="#!" ><i className="material-icons">view_module</i>Promote Gen. Coor</a></li>
                    <li><a href="#!" ><i className="material-icons">view_module</i>View Players</a></li>
                    <li><a href="#!" ><i className="material-icons">view_module</i>Rest Pass</a></li>
                    <li><a href="#!" ><i className="material-icons">cloud</i>Block</a></li>
                </ul>


                {/* OPERATOR  Modal*/}
                    {/* addd/modify */}
                <div id="modal_operator" className="modal s-modal modal-fixed-footer">
                    <div className="modal-content">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="operator_name"  type="text" className="validate" name="operator_name" value={this.state.formdata.operator_name} onChange={this.handleChange} />
                                <label htmlFor="operator_name">Operator Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        {!this.state.isUpdate ?
                            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.addOperator} >
                                Add Operator
                            </button>:
                            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.addOperator} >
                                Update
                            </button>
                        }
                        
                    </div>
                </div>

                {/* GENERAL COORDINATOR  Modal*/}
                    {/* add/modify */}
                <div id="modal_gencoor" className="modal s-modal modal-fixed-footer">
                    <div className="modal-content">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoor_name" type="text" className="validate" name="parmusrfnm" value={this.state.gencoor.parmusrfnm} onChange={this.handleChangeGenCoor}/>
                                <label htmlFor="gencoor_name">Operator Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoorfull_name" type="text" className="validate" name="parmusrlnm" value={this.state.gencoor.parmusrlnm} onChange={this.handleChangeGenCoor} />
                                <label htmlFor="gencoorfull_name">Full Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoorPass" type="text" className="validate" />
                                <label htmlFor="gencoorPass">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoor_mobile" type="text" className="validate" name="parmusrmobno" value={this.state.gencoor.parmusrmobno} onChange={this.handleChangeGenCoor} />
                                <label htmlFor="gencoor_mobile">Mobile</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="gencoor_addr" className="materialize-textarea" name="parmemladd" ></textarea>
                                <label htmlFor="gencoor_addr">Address</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoor_email" type="text" className="validate" name="parmemladd" value={this.state.gencoor.parmemladd} onChange={this.handleChangeGenCoor}/>
                                <label htmlFor="gencoor_email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoor_comm" type="text" className="validate" />
                                <label htmlFor="gencoor_comm">Commission</label>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.addGenCoor}>
                            Add General Coordinator
                        </button>
                    </div>
                </div>
                
                    {/* reset pass */}
                {/* <div id="modal_gencoor_resetpass" className="modal s-modal modal-fixed-footer">
                    <div className="modal-content">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoor_name" type="text" className="validate" />
                                <label htmlFor="gencoor_name">Operator Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoorfull_name" type="text" className="validate" />
                                <label htmlFor="gencoorfull_name">Full Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoorPass" type="text" className="validate" />
                                <label htmlFor="gencoorPass">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoor_mobile" type="text" className="validate" />
                                <label htmlFor="gencoor_mobile">Mobile</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="gencoor_addr" className="materialize-textarea"></textarea>
                                <label htmlFor="gencoor_addr">Address</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoor_email" type="text" className="validate" />
                                <label htmlFor="gencoor_email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoor_comm" type="text" className="validate" />
                                <label htmlFor="gencoor_comm">Commission</label>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            Add General Coordinator
                        </button>
                    </div>
                </div> */}


                {/* COORDINATOR  MODAL*/}
                <div id="modal_coor" className="modal s-modal modal-fixed-footer">
                    
                </div>

                    {/* view players */}
                <div id="modal_coor_viewplayers" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        
                    </div>
                    <div className="modal-footer">
                        <button className="btn waves-effect waves-light" type="submit" name="action" >
                            Add Coordinator
                        </button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default UserAccount;