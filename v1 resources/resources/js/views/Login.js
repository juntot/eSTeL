import React from 'react'
import '../../css/Login.css';
import {withRouter} from 'react-router-dom';
import Auth from '../auth'
import Axios from 'axios';
const M =  window.M;


class Login extends React.Component {
    constructor(props){
        super(props);
        const {from} = this.props.location.state || {from: {pathname: '/'}}
        if(Auth.isAuth)
        this.props.history.push(from);
        
        this.state = { 
            username: '', 
            pass: '',
            comp_id: '',
            showToast: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }
    
    login(){
        // M.Toast.dismissAll();
        
        const {from} = this.props.location.state || {from: {pathname: '/'}}
        Axios.post('api/login',{username: this.state.username, pass: this.state.pass, comp_id: this.state.comp_id})
        .then((res)=>{
            if(res.data.length > 0){
                Auth.login(res.data[0], ()=>{
                    this.props.history.push(from);    
                });
            }else{
                
                // 
                let errmsg = `
                <div class="d-flex alert-content" >   
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24"/>
                            <circle fill="#b7170b" opacity="0.8" cx="12" cy="12" r="10"/>
                            <rect fill="#fff" x="11" y="7" width="2" height="8" rx="1"/>
                            <rect fill="#fff" x="11" y="16" width="2" height="2" rx="1"/>
                        </g>
                        </svg>
                    <div class="alert-msg" >
                        User not found
                    </div>
                </div>`;
                if(!this.state.showToast){
                    window.M.toast({
                        html: errmsg, classes: 'rounded alert-danger',
                        displayLength: 2000, 
                        completeCallback:()=>this.setState({showToast: false})
                    })
                    this.setState({showToast: true});
                }
                
                
                
            }
        })
        .catch((err)=>console.log(err))


        // let arr_type = ['6', '7', '8', '9', '0'];
        // let type = (this.state.username).toLocaleLowerCase();
        // if(arr_type.includes(type)){
        //     Auth.login(type, ()=>{
        //         this.props.history.push(from);
                
        //     });
        // }else{
            
            
        //     this.setState({showToast: true});
        //     let errmsg = `
        //     <div class="d-flex alert-content" >   
        //             <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
        //             <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        //                 <rect x="0" y="0" width="24" height="24"/>
        //                 <circle fill="#b7170b" opacity="0.8" cx="12" cy="12" r="10"/>
        //                 <rect fill="#fff" x="11" y="7" width="2" height="8" rx="1"/>
        //                 <rect fill="#fff" x="11" y="16" width="2" height="2" rx="1"/>
        //             </g>
        //             </svg>
        //         <div class="alert-msg" >
        //             User not found
        //         </div>
        //     </div>`;
        //     if(!this.state.showToast){
        //         M.toast({
        //             html: errmsg, classes: 'rounded alert-danger',
        //             displayLength: 982000, 
        //             completeCallback:()=>this.setState({showToast: false})
        //         })
        //     }
        //     // setTimeout(function(){ alert("Hello"); }, 1000);
            
            
        // }
        
    }
    handleChange(e){
        M.Toast.dismissAll();
        let name = e.target.name;
        this.setState({ [name] : e.target.value });
    }
    
    render() { 
        return (
            
            <div className="row">
                <div className="col s12 center-align login">
                    <div className="logo">
                        <a href="/#">
                            <h5>COMPANY LOGO HERE</h5>
                        </a>
                    </div>
                    <div className="content overflow-hidden">
                        
                            <div className="row">
                                <h6 className="form-title left-align">Login to your account</h6>
                                <div className="input-field">
                                    <input id="comp_id" type="text" name="comp_id" className="validate" value={this.state.comp_id} onChange={this.handleChange} />
                                    <label htmlFor="comp_id">Comp ID</label>
                                </div>
                                <div className="input-field">
                                    <input id="username" type="text" name="username" className="validate" value={this.state.username} onChange={this.handleChange} />
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="input-field">
                                    <input id="password" type="password" name="pass" value={this.state.pass} onChange={this.handleChange}/>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="form-actions">
                                    <button className="waves-effect waves-light btn full-width" onClick={this.login}>Login</button>
                                </div>
                                <div className="forget-password">
                                    <p className="left-align bold-text">Forgot your password ?</p>
                                    <p className="left-align">no worries, click<a href="/#" className="bold-text"> here </a> to reset your password. </p>
                                </div>
                            </div>
                    
                    </div>
                </div>
            </div>
         );
    }
    componentWillUnmount(){
        document.body.classList.remove('login-body');
    }
    componentDidMount(){
        document.body.classList.add('login-body');
        M.updateTextFields();
    }
}
 
// export default Login;
export default withRouter(Login);