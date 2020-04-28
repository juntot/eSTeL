class Auth{
    

    constructor(){
        this.isAuth = false;
        this.uerType = 'none';
        if(localStorage.getItem('user'))
        this.isAuth = true
        if(localStorage.getItem('type'))
        this.userType = localStorage.getItem('type');
    }

    login(type, cb){
        localStorage.setItem('user', 'test');
        localStorage.setItem('type', type);
        this.isAuth = true; 
        this.userType = type;
        return cb();
    }
    logout(cb){
        localStorage.removeItem('user');
        localStorage.removeItem('type');
        this.isAuth = false;
        return cb();
    }

}
export default new Auth();