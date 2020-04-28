import React from 'react'
import '../../css/Login.css';
import {withRouter} from 'react-router-dom';
import Auth from '../auth'
const M =  window.M;


class Login extends React.Component {
    constructor(props){
        super(props);
        const {from} = this.props.location.state || {from: {pathname: '/'}}
        if(Auth.isAuth)
        this.props.history.push(from);
        
        this.state = { username: '', pass: '' };
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }
    
    login(){
        const {from} = this.props.location.state || {from: {pathname: '/'}}
        let arr_type = ['operation', 'accounting', 'accounts', 'treasury'];
        let type = (this.state.username).toLocaleLowerCase();
        if(arr_type.includes(type)){
            Auth.login(type, ()=>{
                this.props.history.push(from);
                
            });
        }else{
            console.log('user type not found');
        }
        
    }
    handleChange(e){
        
        let name = e.target.name;
        this.setState({ [name] : e.target.value });
        console.log(name)
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
                    <div className="content">
                        
                            <div className="row">
                                <h6 className="form-title left-align">Login to your account</h6>
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