import React, {forwardRef, useImperativeHandle } from 'react';
import { useForm } from "react-hook-form";


const CoorForm = forwardRef((props, ref) => {

    const { register, errors, handleSubmit, reset } = useForm({
        mode: "onChange"
      });
    const onSubmit = data => {
        props.addCoor(data);
        // console.log(JSON.stringify(data));
    };

    useImperativeHandle(ref, () => ({
        resetValErr() {
          reset();
        }
    
    }));

    M.updateTextFields();
    return ( 
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal-content">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="coor_name" type="text" className="validate" defaultValue={props.formData.parmusrfnm} name="parmusrfnm" 
                                ref={register({ required: true })}
                                />
                                <label htmlFor="coor_name">First Name</label>
                                {errors.parmusrfnm && <span className="ërr-msg">This is required</span>}
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="coorfull_name" type="text" className="validate" name="parmusrlnm" 
                                ref={register({ required: true })}
                                />
                                <label htmlFor="coorfull_name">Last Name</label>
                                {errors.parmusrlnm && <span className="ërr-msg">This is required</span>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="coorPass" type="text" className="validate" />
                                <label htmlFor="coorPass">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="coor_mobile" type="text" className="validate" name="parmusrmobno" 
                                ref={register({ required: true })}
                                />
                                <label htmlFor="coor_mobile">Mobile</label>
                                {errors.parmusrmobno && <span className="ërr-msg">This is required</span>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="textarea1" className="materialize-textarea validate"></textarea>
                                <label htmlFor="textarea1">Textarea</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="coor_email" type="text" className="validate" name="parmemladd" 
                                ref={register({ required: false})}
                                />
                                <label htmlFor="coor_email">Email</label>
                                {errors.parmemladd && <span className="ërr-msg">This is required</span>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="coor_comm" type="text" className="validate" />
                                <label htmlFor="coor_comm">Commission</label>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn waves-effect waves-light" type="submit" name="action" >
                        {props.isUpdate ? 'Update Coordinator' : 'Add Coordinator' }
                        </button>
                    </div>
            </form>
        </div>
     );
});
 
export default CoorForm;