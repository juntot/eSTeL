// export const validate = (target) =>{
//     const {name, value} = target;
//     let setErrors = {}
//     switch(name){
//         case 'FirstName':
//             setErrors = {...setErrors, 'FirstName': value.length < 5 ? 'must be greater than 5': ''};
//             break;
//         case 'LastName':
//             setErrors = {...setErrors, 'LastName': value.length == '' ? 'this field is required': value.length < 3 ? 'mst be greeter than 3':''};
//         break;
//     }
//     return setErrors
// }

// export const validateAll = (form) =>{
//     let setErrors = {};
//     let inputF = document.querySelectorAll(`${form} input`);
//     if(inputF.length>0){
        
//         inputF.forEach(element => {
//             let {name, value} = element;
//             switch(name){
//                 case 'FirstName':
//                     setErrors = {...setErrors, 'FirstName': value.length < 5 ? 'must be greater than 5': ''};
//                     break;
//                 case 'LastName':
//                     setErrors = {...setErrors, 'LastName': value.length == '' ? 'this field is required': value.length < 3 ? 'mst be greeter than 3':''};
//                 break;
//             }
//         });
        

//     }
//     return setErrors;
// }


class Form{

    constructor(){
        this.errors= {};
        this.form_data = {};
        this.validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    }
    initVal(obj){
        let inputF = document.querySelectorAll(`input, textarea, select`);
        if(inputF.length>0){
            inputF.forEach(element => {
                element.value= obj[element.name] || '';
            });
        }
    }

    validate(target){
        let {name, value} = target;
        switch(name){
            case 'FirstName':
                this.errors = {...this.errors, 'FirstName': value.length < 5 ? 'must be greater than 5': ''};
                break;
            case 'LastName':
                this.errors = {...this.errors, 'LastName': value.length == '' ? 'this field is required': value.length < 3 ? 'mst be greeter than 3':''};
                break;
            case 'parmemladd':
                this.errors = {...this.errors, 'parmemladd':  this.validEmailRegex.test(value) ? '': 'Not valid email' }
            break;
        }
        return this.errors;
    }
     validateAll(){
        let inputF = document.querySelectorAll(`input, textarea, select`);
        if(inputF.length>0){
            
            inputF.forEach(element => {
                this.validate(element);
            });
            
            return  this.errors;
        }
    }
    // validate(target){
    //     const {name, value} = target;
    //     let setErrors = {}
    //     switch(name){
    //         case 'FirstName':
    //             setErrors = {...this.errors, 'FirstName': value.length < 5 ? 'must be greater than 5': ''};
    //             break;
    //         case 'LastName':
    //             setErrors = {...this.errors, 'LastName': value.length == '' ? 'this field is required': value.length < 3 ? 'mst be greeter than 3':''};
    //         break;
    //     }
    //     return this.errors = setErrors;
    // }
    // validateAll(){
    //     let inputF = document.querySelectorAll(`input, textarea, select`);
    //     if(inputF.length>0){
    //         let setErrors = {}
    //         inputF.forEach(element => {
                
    //             let {name, value} = element;
    //             switch(name){
    //                 case 'FirstName':
    //                     setErrors = {...setErrors, 'FirstName': value.length < 5 ? 'must be greater than 5': ''};
    //                     break;
    //                 case 'LastName':
    //                     setErrors = {...setErrors, 'LastName': value.length == '' ? 'this field is required': value.length < 3 ? 'mst be greeter than 3':''};
    //                 break;
    //             }
                
    //         });
    //         return  this.errors = setErrors;
    //     }
    // }
    reset(){
        let setErrors ={};
        let inputF = document.querySelectorAll(`input, textarea, select`);
        if(inputF.length>0){
            inputF.forEach(element => {
                
                // let {name, value} = element;
                element.value= '' ;
                
            });
            return  this.errors = setErrors;
        }
       
    }

}

export default new Form();