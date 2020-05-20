export const openModal = (modalID, cb) => {
    M.Modal.init(document.getElementById(`${modalID}`), {
            onOpenEnd:()=>M.updateTextFields(),
            onCloseEnd:()=>{
                cb();
            }
    }).open();
}

export const closeModal = (modalID , cb) =>{

    M.Modal.init(document.getElementById(`${modalID}`), {
        onOpenEnd:()=>M.updateTextFields(),
        onCloseEnd:()=>{
            // this.reset();
            // this.resetForm();
            // M.updateTextFields();
            cb();
        }
    }).close();
}


export const initDropDown = () =>{
    let drdown = document.querySelectorAll('.dropdown-trigger');
    let options = {
        constrainWidth: false,
        inDuration: 0,
        outDuration: 300,
    };
    M.Dropdown.init(drdown, options);
}