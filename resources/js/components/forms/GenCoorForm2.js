import React, {forwardRef, useImperativeHandle, useEffect } from 'react';
import { useForm } from "react-hook-form";

const GenCoorForm = forwardRef((props, ref) => {
    
    const { register, errors, handleSubmit, reset  } = useForm({
        mode: "onChange"
      });
    const onSubmit = data => {
        props.addGenCoor(data);
    };
    
    const branch_list = () =>{
        if(props.branch_list.length > 0 ){
            return props.branch_list.map((branch, key)=>{
                return <option key={key} value={branch.BR_CD}>{branch.BR_NME}</option>
            })
        }
    };

    useImperativeHandle(ref, () => ({
        
        resetValErr() {
          reset();
        }
    
    }));

useEffect(() => {
    M.updateTextFields();
    return () => {
    //   console.log("componentWillUnmount");
    };
}, []);
    
    
    M.FormSelect.init(document.querySelectorAll('select'));
    M.updateTextFields();
    return ( 
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)} id="gencoorform">
            <div className="modal-content">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoor_name" type="text" className="validate" name="FirstName" 
                                defaultValue={ props.formData.FirstName }
                                ref={register({ required: true })}
                                />
                                <label htmlFor="gencoor_name">First Name</label>
                                {errors.FirstName && <span className="ërr-msg">This is required</span>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoorfull_name" type="text" className="validate" name="LastName" 
                                defaultValue={ props.formData.LastName }
                                ref={register({ required: true })}
                                />
                                <label htmlFor="gencoorfull_name">Last Name</label>
                                {errors.LastName && <span className="ërr-msg">This is required</span>}
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoorPass" type="text" className="validate" />
                                <label htmlFor="gencoorPass">Password</label>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoor_mobile" type="text" className="validate" name="MobileNo" 
                                defaultValue={ props.formData.MobileNo }
                                ref={register({ required: true })}
                                />
                                <label htmlFor="gencoor_mobile">Mobile</label>
                                {errors.MobileNo && <span className="ërr-msg">This is required</span>}
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoor_addr" type="text" className="validate" name="parmusraddr" 
                                defaultValue={ props.formData.parmusraddr }
                                ref={register({ required: true })}
                                />
                                <label htmlFor="gencoor_addr">Address</label>
                                {errors.parmusraddr && <span className="ërr-msg">This is required</span>}
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="gencoor_email" type="text" className="validate" name="parmemladd"
                                defaultValue={ props.formData.parmemladd } 
                                ref={register({ 
                                    required: 'This is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                />
                                <label htmlFor="gencoor_email">Email</label>
                                <span className="ërr-msg"> {errors.parmemladd && errors.parmemladd.message}</span>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m-select-option">
                                <select name="BranchCode" disabled={!props.branch_list.length}
                                defaultValue={props.formData.BranchCode}
                                ref={register({ required: true })}
                                >  
                                    { branch_list() || ''}
                                </select>
                                <label>Materialize Select</label>
                               
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
                            {props.isUpdate ? 'Update General Coordinator' : 'Add General Coordinator'}
                        </button>
                    </div>
            </form>
        </div>
     );
});
 
export default GenCoorForm;