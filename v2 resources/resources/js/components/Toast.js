export const error = (message = '') =>{
        M.Toast.dismissAll();
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
                ${message}
            </div>
        </div>`;
        M.toast({
            html: errmsg , classes: 'rounded alert-danger',
            displayLength: 1500, 
        });
}

export const success = (message = '') =>{
    M.Toast.dismissAll();
    let errmsg = `
    <div class="d-flex alert-content" >   
        <i class="material-icons">check</i>
        <div class="alert-msg" >
            ${message}
        </div>
    </div>`;
    M.toast({
        html: errmsg , classes: 'rounded alert-success',
        displayLength: 1500, 
    });
}
