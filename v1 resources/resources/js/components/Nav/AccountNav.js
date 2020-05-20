import React from 'react'
import { NavLink, withRouter} from "react-router-dom";



class OperationNav extends React.Component {
    
    constructor(props){
        super(props);
        
    }
    
    componentDidMount(){
        // sidenav
        let elems = document.querySelectorAll('.sidenav');
        let options = {edge: 'left', draggable: true}
        window.M.Sidenav.init(elems, options);
        
        // dropdown profile
        elems = document.querySelectorAll('.dropdown-trigger');
        options = {
            constrainWidth: false,
            // coverTrigger: false,
            inDuration: 0,
            outDuration: 300,
        }
        
        window.M.Dropdown.init(elems, options);
         // dropdown submenu
         let list = document.querySelectorAll('li.submenu');
         list.forEach((el)=>{
             el.addEventListener('click', (e)=>{
                 console.log(e);
            });
         });
         
        // accordion
        elems = document.querySelectorAll('.collapsible');
        options = {
            accordion: true
        }
        window.M.Collapsible.init(elems, options);


        // sidenav main parent highlight when active
        let nodetree = document.querySelector('ul.main-ul li a.sidenav-close.active');
        if(nodetree){
            // nodetree.closest('div.collapsible-body').style.display = "block";
            nodetree.closest('div.collapsible-body').previousSibling.classList.add('active');
        }
        // document.getElementById('awx').click();
        
        // end
        
        
    }

    highlightParentMenu(el){
        console.log(el);
    }
    render(){
        return (
            <div id="slide-out" className="sidenav sidenav-fixed metronic-dark-bg">
                <div className="section-sidenav">
                    {/* <!-- brand --> */}
                    <div className="hide-on-large-only">
                        <a href="#" className="btn-small waves-effect waves-light right sidenav-close mobile-sidenav-btn">
                            <i className="material-icons">close</i>
                        </a>
                    </div>
                    <div className="no-scroll hide-on-small-only" >
                        <ul className="brand-logo valign-wrapper">
                            <li>
                                <NavLink to="/" className="sidenav-close">
                                    <i className="material-icons">cloud</i> COMPANY LOGO
                                </NavLink>
                                
                            </li>
                        </ul>
                    </div>
                    {/* <!-- brand --> */}
    
                    {/* <!-- start sidescroll --> */}
                    <div className="sidebar-scroll">
                        <ul className="collapsible">
                            <li>
                                <NavLink exact to="/" className="sidenav-close padding-none">
                                    <div className="collapsible-header white-text text-darken-2">
                                        <span className="mc-sidebar-icon active">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <polygon id="Bound" points="0 0 24 0 24 24 0 24"></polygon>
                                                <path className='mc-sidebar-icon' d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" id="Shape" fill="#000000" fillRule="nonzero"></path>
                                                <path d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" 
                                                className="mc-sidebar-icon active" opacity="0.3"></path>
                                            </g>
                                            </svg>
                                        </span>
                                        Dashboard
                                    </div>
                                </NavLink>
                                <div className="collapsible-body metronic-dark-bg"></div>
                              
                            </li>
                            <li>
                                <label className="sidebar-group-text">Tools</label>
                            </li>
                            <li>
                            <NavLink to="/user-account" className="padding-none sidenav-close">
                                <div className="collapsible-header text-darken-2">
                                    <span className="mc-sidebar-icon active">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24"/>
                                                <path className="mc-sidebar-icon" d="M18,2 L20,2 C21.6568542,2 23,3.34314575 23,5 L23,19 C23,20.6568542 21.6568542,22 20,22 L18,22 L18,2 Z" id="Rectangle-161-Copy" fill="#000000" opacity="0.3"/>
                                                <path className="mc-sidebar-icon" d="M5,2 L17,2 C18.6568542,2 20,3.34314575 20,5 L20,19 C20,20.6568542 18.6568542,22 17,22 L5,22 C4.44771525,22 4,21.5522847 4,21 L4,3 C4,2.44771525 4.44771525,2 5,2 Z M12,11 C13.1045695,11 14,10.1045695 14,9 C14,7.8954305 13.1045695,7 12,7 C10.8954305,7 10,7.8954305 10,9 C10,10.1045695 10.8954305,11 12,11 Z M7.00036205,16.4995035 C6.98863236,16.6619875 7.26484009,17 7.4041679,17 C11.463736,17 14.5228466,17 16.5815,17 C16.9988413,17 17.0053266,16.6221713 16.9988413,16.5 C16.8360465,13.4332455 14.6506758,12 11.9907452,12 C9.36772908,12 7.21569918,13.5165724 7.00036205,16.4995035 Z" id="Combined-Shape" fill="#000000"/>
                                            </g>
                                        </svg>
                                    </span>
                                    User Accounts
                                </div>
                                </NavLink>
                                <div className="collapsible-body metronic-dark-bg"></div>
                            </li>
                            <li>
                            <NavLink to="/search-account" className="padding-none sidenav-close">
                                <div className="collapsible-header text-darken-2">
                                    <span className="mc-sidebar-icon active">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                <rect className="mc-sidebar-icon" id="Rectangle-62-Copy" fill="#000000" opacity="0.3" x="13" y="4" width="3" height="16" rx="1.5"></rect>
                                                <rect className="mc-sidebar-icon" id="Rectangle-62-Copy-2" fill="#000000" x="8" y="9" width="3" height="11" rx="1.5"></rect>
                                                <rect className="mc-sidebar-icon" id="Rectangle-62-Copy-4" fill="#000000" x="18" y="11" width="3" height="9" rx="1.5"></rect>
                                                <rect className="mc-sidebar-icon" id="Rectangle-62-Copy-3" fill="#000000" x="3" y="13" width="3" height="7" rx="1.5"></rect>
                                            </g>
                                        </svg>
                                    </span>
                                    Search Accounts
                                </div>
                                </NavLink>
                                <div className="collapsible-body metronic-dark-bg"></div>
                            </li>
                            
                            
                        </ul>
                    </div>
                    {/* <!-- end sidescroll --> */}
                </div>
                {/* <!-- end section sidenav --> */}
            </div>
        );
    }
    

}
 
export default withRouter(OperationNav);