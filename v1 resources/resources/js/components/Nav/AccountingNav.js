import React from 'react'
import { NavLink, withRouter} from "react-router-dom";



class AccountingNav extends React.Component {
    
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
                            <NavLink to="/power-app" className="padding-none sidenav-close">
                                <div className="collapsible-header text-darken-2">
                                    <span className="mc-sidebar-icon active">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24"/>
                                                <path className="mc-sidebar-icon" d="M5,2 L19,2 C20.1045695,2 21,2.8954305 21,4 L21,6 C21,7.1045695 20.1045695,8 19,8 L5,8 C3.8954305,8 3,7.1045695 3,6 L3,4 C3,2.8954305 3.8954305,2 5,2 Z M11,4 C10.4477153,4 10,4.44771525 10,5 C10,5.55228475 10.4477153,6 11,6 L16,6 C16.5522847,6 17,5.55228475 17,5 C17,4.44771525 16.5522847,4 16,4 L11,4 Z M7,6 C7.55228475,6 8,5.55228475 8,5 C8,4.44771525 7.55228475,4 7,4 C6.44771525,4 6,4.44771525 6,5 C6,5.55228475 6.44771525,6 7,6 Z" id="Combined-Shape" fill="#000000" opacity="0.3"/>
                                                <path className="mc-sidebar-icon" d="M5,9 L19,9 C20.1045695,9 21,9.8954305 21,11 L21,13 C21,14.1045695 20.1045695,15 19,15 L5,15 C3.8954305,15 3,14.1045695 3,13 L3,11 C3,9.8954305 3.8954305,9 5,9 Z M11,11 C10.4477153,11 10,11.4477153 10,12 C10,12.5522847 10.4477153,13 11,13 L16,13 C16.5522847,13 17,12.5522847 17,12 C17,11.4477153 16.5522847,11 16,11 L11,11 Z M7,13 C7.55228475,13 8,12.5522847 8,12 C8,11.4477153 7.55228475,11 7,11 C6.44771525,11 6,11.4477153 6,12 C6,12.5522847 6.44771525,13 7,13 Z" id="Combined-Shape-Copy" fill="#000000"/>
                                                <path className="mc-sidebar-icon" d="M5,16 L19,16 C20.1045695,16 21,16.8954305 21,18 L21,20 C21,21.1045695 20.1045695,22 19,22 L5,22 C3.8954305,22 3,21.1045695 3,20 L3,18 C3,16.8954305 3.8954305,16 5,16 Z M11,18 C10.4477153,18 10,18.4477153 10,19 C10,19.5522847 10.4477153,20 11,20 L16,20 C16.5522847,20 17,19.5522847 17,19 C17,18.4477153 16.5522847,18 16,18 L11,18 Z M7,20 C7.55228475,20 8,19.5522847 8,19 C8,18.4477153 7.55228475,18 7,18 C6.44771525,18 6,18.4477153 6,19 C6,19.5522847 6.44771525,20 7,20 Z" id="Combined-Shape-Copy-2" fill="#000000"/>
                                            </g>
                                        </svg>
                                    </span>
                                    Power-App Report
                                </div>
                                </NavLink>
                                <div className="collapsible-body metronic-dark-bg"></div>
                            </li>
                            <li>
                            <NavLink to="/winning-report" className="padding-none sidenav-close">
                                <div className="collapsible-header text-darken-2">
                                    <span className="mc-sidebar-icon active">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                <rect className="mc-sidebar-icon" id="Rectangle-62-Copy" fill="#000000" opacity="0.3" x="13" y="4" width="3" height="16" rx="1.5"></rect>
                                                <rect className="mc-sidebar-icon" id="Rectangle-62-Copy-2" fill="#000000" x="8" y="9" width="3" height="11" rx="1.5"></rect>
                                                <rect className="mc-sidebar-icon" id="Rectangle-62-Copy-4" fill="#000000" x="18" y="11" width="3" height="9" rx="1.5"></rect>
                                                <rect className="mc-sidebar-icon" id="Rectangle-62-Copy-3" fill="#000000" x="3" y="13" width="3" height="7" rx="1.5"></rect>
                                            </g>
                                        </svg> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"/>
                                                <path className="mc-sidebar-icon" d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z" fill="#000000" fillRule="nonzero"/>
                                                <path className="mc-sidebar-icon" d="M8.7295372,14.6839411 C8.35180695,15.0868534 7.71897114,15.1072675 7.31605887,14.7295372 C6.9131466,14.3518069 6.89273254,13.7189711 7.2704628,13.3160589 L11.0204628,9.31605887 C11.3857725,8.92639521 11.9928179,8.89260288 12.3991193,9.23931335 L15.358855,11.7649545 L19.2151172,6.88035571 C19.5573373,6.44687693 20.1861655,6.37289714 20.6196443,6.71511723 C21.0531231,7.05733733 21.1271029,7.68616551 20.7848828,8.11964429 L16.2848828,13.8196443 C15.9333973,14.2648593 15.2823707,14.3288915 14.8508807,13.9606866 L11.8268294,11.3801628 L8.7295372,14.6839411 Z" fill="#000000" fillRule="nonzero" opacity="0.3"/>
                                            </g>
                                        </svg>
                                    </span>
                                    Winning Report
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
 
export default withRouter(AccountingNav);