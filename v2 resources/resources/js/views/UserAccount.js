import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar';
import Axios from 'axios';
import auth from '../auth';
import {error, success} from '../components/Toast';
import CoorForm from '../components/forms/CoorForm';
import GenCoorForm from '../components/forms/GenCoorForm';
import { openModal, closeModal, initDropDown } from '../services/MaterialServices';

let _cancelAxios = '';
let _operatorModal = '';
let elems = '';
    
class UserAccount extends React.Component {
    


    constructor(props){
        super(props);
        this.state={
            userinfo:{
                parmcompid: auth.compid, 
                parmbrcd: auth.brcd, 
                parmuserid: auth.userid, 
                parmrcompid: auth.compid, 
                // parmrbrcd: auth.brcd, 
            },
            gencoor:{
                
                MobileNo: '',
                FirstName: '',
                LastName: '',
                parmemladd: '',
                BranchCode: '',
                // parmusraddr: '',
                // @@
                parmgndr: 'M', 
                parmmtrlstat: 'S', 
                parmctznshp: 'F', 
                parmusertype: '3'
            },
            coor:{
                
                parmusrmobno: '',
                parmusrfnm: '',
                parmusrlnm: '',
                parmemladd: '',
                parmusraddr: '',
                BranchCode: '',
                // @@
                parmgndr: 'M', 
                parmmtrlstat: 'S', 
                parmctznshp: 'F', 
                parmusertype: '4'
            },
            branch_list: [],
            gencoor_list:[],
            coor_list:[],
            player_list: [],
            isUpdate: false,
            selectedRowCoor: '',
            selectedRowGenCoor: '',

        }

        // this.handleChangeGenCoor = this.handleChangeGenCoor.bind(this);
        this.modifyGenCoor = this.modifyGenCoor.bind(this);
        this.getSelectedGenCoor = this.getSelectedGenCoor.bind(this);
        this.openGenCoorModal = this.openGenCoorModal.bind(this);

        this.getSelectedCoor = this.getSelectedCoor.bind(this);
        // this.handleChangeCoor = this.handleChangeCoor.bind(this);
        this.addCoor = this.addCoor.bind(this);
        this.openCoorPlayerModal = this.openCoorPlayerModal.bind(this);

        this.genCoorRef = React.createRef();
        this.coorRef = React.createRef();

        
    }
    // display gen coor
    dispGenCoor(){
        // return this.state.gencoor_list.map()
        return this.state.gencoor_list.map((list, key)=>{
            return(
                <tr key={key}>
                    <td>{ list.FirstName }</td>
                    <td>{ list.CreditBalance }</td>
                    <td>{ list.CommissionBalance }</td>
                    <td>{ list.ReferenceCustID }</td>
                    <td className="center-align">
                        <div>
                            <a onClick={()=>this.getSelectedGenCoor(key)} className="dropdown-trigger btn-floating pulse red darken-3" data-target='dropdown3'>
                                <i className="material-icons">settings</i>
                            </a>
                        </div>
                        
                    </td>
                </tr>
            );
        })
    }

    // add
    modifyGenCoor(data){
        if(this.state.isUpdate){
            alert('is update');
        }else{
            
            let formData = {...this.state.userinfo, ...data, 
                parmgndr: 'M', 
                parmmtrlstat: 'S', 
                parmctznshp: 'F', 
                parmusertype: '3'
            };
            
            Axios.post('api/add_gencoor', formData).then((res)=>{
                if(res.data.length > 0 && res.data[0].RESULT == '1')
                { 
                    console.log(res.data)   ;
                    
                    // closeModal('modal_gencoor', ()=>{
                    //     this.reset();
                    // });

                    // success('success');
                    
                    // let append_gencoor = this.state.gencoor_list;
                    // append_gencoor.unshift(formData);
                    // this.setState({gencoor_list: append_gencoor},()=>initDropDown());

                   
                
                    
                }else{
                    error('An error occured please try again or check your internet connection');
                }
            })
            .catch();
        }
        
    }
    componentDidUpdate(prevProps, prevState, snapshot){
            // if(prevState.gencoor_list>0){
            //     initDropDown();
            // }
            // console.log(prevState.gencoor_list.length, this.state.gencoor_list.length);
    }
   
    updateGenCoor(data){

        let formData = {...this.state.userinfo, ...data, 
            parmgndr: 'M', 
            parmmtrlstat: 'S', 
            parmctznshp: 'F', 
            parmusertype: '3'
        };
        
        Axios.post('api/add_gencoor', formData).then((res)=>{
            if(res.data.length > 0 && res.data[0].RESULT == '1')
            {    
                // let elems = document.querySelectorAll('#modal_gencoor');
                // window.M.Modal.init(elems)[0].close();
                closeModal('modal_gencoor', ()=>{
                    this.reset();
                })
                success('success');
                
                
            }else{
                error('An error occured please try again or check your internet connection');
            }
        })
        .catch();
    }

    openGenCoorModal(){
        
        let row = this.state.gencoor_list[this.state.selectedRowGenCoor];
        this.setState({gencoor: row, isUpdate: true});
        this.genCoorRef.current.initForm(row);
        this.genCoorRef.current.validateForm();
        openModal('modal_gencoor', ()=>{
            this.reset();
            this.resetForm();
            M.updateTextFields();
        });

    }
   

    getSelectedGenCoor(index){
        this.setState({selectedRowGenCoor: index});
    }

    
    // display coor
    dispCoor(){
        // return this.state.gencoor_list.map()
        return this.state.coor_list.map((list, key)=>{
            return(
                <tr key={key}>
                    <td>{ list.FirstName }</td>
                    <td>{ list.CreditBalance }</td>
                    <td>{ list.CommissionBalance }</td>
                    <td className="center-align">
                        <div>
                            <a onClick={()=>this.getSelectedCoor(key)} className="dropdown-trigger btn-floating pulse red darken-3" data-target='dropdown4'>
                                <i className="material-icons">settings</i>
                            </a>
                        </div>
                        
                    </td>
                </tr>
            );
        })
    }

    getSelectedCoor(row){
        this.setState({selectedRowCoor: row, isUpdate: true});
    }
    
    addCoor(obj){
        error('awssz');
        // success('success');
        console.log(obj);
        // <Toast message="asdf" />
    }
    
    openCoorModal(){
        _operatorModal[3].open();
        document.querySelector('.modal-overlay').addEventListener('click',()=>_operatorModal[3].close());
    }


    
    openCoorPlayerModal(){
        let row = this.state.coor_list[this.state.selectedRowCoor];
        let coorid =  (row.CompanyID + row.CustID);
    
      
        Axios.get('api/get_player_coor/'+coorid)
        .then((res)=>{
            if(res.data.length > 0){
                this.setState({player_list: res.data});
            }
        })
        .catch(err => console.log(err));

        _operatorModal[4].open();
        document.querySelector('.modal-overlay').addEventListener('click',()=>_operatorModal[4].close());
    }

    
    // player
    dispPlayer(){
        return this.state.player_list.map((list, key)=>{
            return(
                <tr key={key}>
                    <td>{ list.FirstName }</td>
                    <td>{ list.CreditBalance }</td>
                    <td>{ list.CommissionBalance }</td>
                    <td>{ list.CommissionBalance }</td>
                </tr>
            );
        })
    }
    componentWillUnmount(){
       _cancelAxios.cancel('---cancel--');
    }
    
    componentDidMount(){
        
        _cancelAxios = Axios.CancelToken.source();

        this.genCoorRef.current;

        elems = document.querySelectorAll('.modal');
        _operatorModal = M.Modal.init(elems, 
        {dismissible: true, 
        onCloseEnd:()=>{
            this.reset();
            this.resetForm();
            M.updateTextFields();
        },
        onOpenEnd: ()=>{
            M.updateTextFields();
        }
        });
        
        M.updateTextFields();
        

        // GE BRANCH
        Axios.get('api/get_branch',
        {
            cancelToken: _cancelAxios.token
        })
        .then(res=>{
            if(res.data.length >0){
                this.setState({branch_list: res.data});
            }
            
        })
        .catch(err=>console.log(err));
        // GET GENERAL COOR
        Axios.get('api/get_gencoor',{
            cancelToken: _cancelAxios.token
        })
        .then(res=>{

            if(res.data.length > 0 ){
                this.setState({gencoor_list: res.data});
            
                // re intialize dropdown
                let drdown = document.querySelectorAll('.dropdown-trigger');
                let options = {
                    constrainWidth: false,
                    inDuration: 0,
                    outDuration: 300,
                };
                M.Dropdown.init(drdown, options);

                // get coordinator
                let first_coor = (res.data[0].CompanyID + res.data[0].CustID);
                return Axios.get('api/get_coor/'+ first_coor, {
                    cancelToken: _cancelAxios.token
                });

            }
            
            
        })
        .then((res)=>{
            
            if(res && res.data.length > 0){
                this.setState({coor_list: res.data});
                //  re intialize dropdown
                let drdown = document.querySelectorAll('.dropdown-trigger');
                let options = {
                    constrainWidth: false,
                    inDuration: 0,
                    outDuration: 300,
                };
                M.Dropdown.init(drdown, options);
            }
            
            
        })
        .catch(err=>console.log(err));
    }

    handleChange(e){
        let name = e.target.name;
        this.setState({ gencoor:{...this.state.gencoor, [name] : e.target.value, } });
    }
       
    reset(){
        this.setState({
            gencoor:{
               
                MobileNo: '',
                FirstName: '',
                LastName: '',
                parmemladd: '',
                BranchCode: '',
                // @@
                parmgndr: 'M', 
                parmmtrlstat: 'S', 
                parmctznshp: 'F', 
                parmusertype: '3'
            },
            coor:{
               
                parmusrmobno: '',
                parmusrfnm: '',
                parmusrlnm: '',
                parmemladd: '',
                BranchCode: '',
                // @@
                parmgndr: 'M', 
                parmmtrlstat: 'S', 
                parmctznshp: 'F', 
                parmusertype: '4'
            },
            isUpdate: false,
            selectedCoor: '',
        });
        
    }
    resetForm(){
       this.genCoorRef.current.resetValErr();
       M.updateTextFields();
    
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
                                                        <button data-target="modal_gencoor" className="modal-trigger btn waves-effect waves-light" type="submit" name="action"  onClick={()=>this.resetForm()}>
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
                                                            <th className="center-align">Actions</th>
                                                        </tr>
                                                        </thead>

                                                        <tbody>
                                                            { this.dispGenCoor() }
                                                        </tbody>
                                                    </table>
                                                    
                                                    <br/>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="col m12 s12 m-top-15">
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
                                                            <th className="center-align">
                                                                Actions
                                                                
                                                            </th>
                                                        </tr>
                                                        </thead>

                                                        <tbody>
                                                            { this.dispCoor() }
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
                    <li><a href={null} onClick={this.openGenCoorModal}><i className="material-icons">view_module</i>Modify</a></li>
                    <li><a href={null} ><i className="material-icons">cloud</i>Reset Pass</a></li>
                    <li><a href={null} ><i className="material-icons">cloud</i>Block</a></li>
                </ul>

                {/* Drop Down Coordinator Operator Options*/}
                <ul id='dropdown4' className='dropdown-content'>
                    <li><a href={null} onClick={this.openCoorModal}><i className="material-icons">view_module</i>Modify</a></li>
                    <li><a href={null} ><i className="material-icons">view_module</i>Promote Gen. Coor</a></li>
                    <li><a href={null} onClick={this.openCoorPlayerModal}><i className="material-icons">view_module</i>View Players</a></li>
                    <li><a href={null} ><i className="material-icons">view_module</i>Rest Pass</a></li>
                    <li><a href={null} ><i className="material-icons">cloud</i>Block</a></li>
                </ul>


                {/* OPERATOR  Modal*/}
                    {/* addd/modify */}
                <div id="modal_operator" className="modal s-modal modal-fixed-footer">
                    <div className="modal-content">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="operator_name"  type="text" className="validate" name="operator_name" />
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
                    <GenCoorForm 
                        addGenCoor={this.modifyGenCoor} 
                        formData={this.state.gencoor} 
                        isUpdate={this.state.isUpdate}  
                        branch_list={this.state.branch_list}
                    ref={this.genCoorRef}/>
                </div>
                
                {/* COORDINATOR  MODAL*/}
                <div id="modal_coor" className="modal s-modal modal-fixed-footer">
                    <CoorForm addCoor={this.addCoor} formData={this.state.coor} isUpdate={this.state.isUpdate} ref={this.coorRef}  />
                </div>

                    {/* view players */}
                <div id="modal_coor_viewplayers" className="modal modal-fixed-footer">
                    <div className="modal-content">
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
                                { this.dispPlayer() }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default UserAccount;