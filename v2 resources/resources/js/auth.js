const CryptoJS = window.CryptoJS;

class Auth{
    

    constructor(){
        this.salt = 'BXt Ys4([5S Dax(PrhRjOJdac6<jAO4l4HkE3c-D *?MH? Z-r#+As]#.Pmp?%3';
        this.isAuth = false;
        this.userType = 'none';
        // this.decrypted = '';
        
        this.compid = '';
        this.brcd = ''; 
        this.userid =  ''; 
        // this.parmrbrcd =  ''; 
        // this.decrypted = CryptoJS.AES.decrypt(encrypted, "BXt Ys4([5S Dax(PrhRjOJdac6<jAO4l4HkE3c-D *?MH? Z-r#+As]#.Pmp?%3");

        if(localStorage.getItem('user')){
            this.isAuth = true
        }
        if(localStorage.getItem('type')){
            let type = localStorage.getItem('type');
            this.userType = this.decrypt(type);
            
            this.compid = localStorage.getItem('compid');
            this.brcd = localStorage.getItem('brcd');
            this.userid = localStorage.getItem('userid');
        }
        
    }
    encrypt(type){
        
        return CryptoJS.AES.encrypt(type, this.salt).toString();
        // this.decrypted = CryptoJS.AES.decrypt(this.userType, this.salt).toString(CryptoJS.enc.Utf8);
    }
    decrypt(encrypted){
        return CryptoJS.AES.decrypt(encrypted, this.salt).toString(CryptoJS.enc.Utf8);
    }
    clearLocalStorage(){
        for (let attr in localStorage){
            localStorage.removeItem(attr);
         }
    }
    login(obj, cb){
        const encrType =  this.encrypt(obj.Usertype);
        // const ecrCompId = this.encrypt(obj.COMP_ID);
        // const encrBrcd = this.encrypt()
       
        this.userType = obj.Usertype;
        this.compid = obj.CompanyID;
        this.brcd = obj.BranchCode;
        this.userid = obj.CustID;

        localStorage.setItem('user', obj.FirstName);
        localStorage.setItem('fullname', obj.FullName);
        localStorage.setItem('type', encrType);
        localStorage.setItem('compid',this.compid );
        localStorage.setItem('brcd',this.brcd );
        localStorage.setItem('userid',this.userid );


        this.isAuth = true; 
        return cb();
    }
    logout(cb){
        // localStorage.removeItem('user');
        // localStorage.removeItem('type');
        this.clearLocalStorage();

        this.isAuth = false;
        return cb();
    }

}
export default new Auth();