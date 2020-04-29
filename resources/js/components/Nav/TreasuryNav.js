import React from 'react'
import { NavLink, withRouter} from "react-router-dom";



class TreasuryNav extends React.Component {
    
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
                            <NavLink to="/commission-report" className="padding-none sidenav-close">
                                <div className="collapsible-header text-darken-2">
                                    <span className="mc-sidebar-icon active">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"/>
                                                <path className="mc-sidebar-icon active" d="M10.8226874,8.36941377 L12.7324324,9.82298668 C13.4112512,8.93113547 14.4592942,8.4 15.6,8.4 C17.5882251,8.4 19.2,10.0117749 19.2,12 C19.2,13.9882251 17.5882251,15.6 15.6,15.6 C14.5814697,15.6 13.6363389,15.1780547 12.9574041,14.4447676 L11.1963369,16.075302 C12.2923051,17.2590082 13.8596186,18 15.6,18 C18.9137085,18 21.6,15.3137085 21.6,12 C21.6,8.6862915 18.9137085,6 15.6,6 C13.6507856,6 11.9186648,6.9294879 10.8226874,8.36941377 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
                                                <path className="mc-sidebar-icon active" d="M8.4,18 C5.0862915,18 2.4,15.3137085 2.4,12 C2.4,8.6862915 5.0862915,6 8.4,6 C11.7137085,6 14.4,8.6862915 14.4,12 C14.4,15.3137085 11.7137085,18 8.4,18 Z" fill="#000000"/>
                                            </g>
                                        </svg>
                                    </span>
                                    Commission Report
                                </div>
                                </NavLink>
                                <div className="collapsible-body metronic-dark-bg"></div>
                            </li>
                            <li>
                            <NavLink to="/remittance-report" className="padding-none sidenav-close">
                                <div className="collapsible-header text-darken-2">
                                    <span className="mc-sidebar-icon active">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"/>
                                                <path className="mc-sidebar-icon" d="M8,4 C8.55228475,4 9,4.44771525 9,5 L9,17 L18,17 C18.5522847,17 19,17.4477153 19,18 C19,18.5522847 18.5522847,19 18,19 L9,19 C8.44771525,19 8,18.5522847 8,18 C7.44771525,18 7,17.5522847 7,17 L7,6 L5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 L8,4 Z" fill="#000000" opacity="0.3"/>
                                                <rect className="mc-sidebar-icon" fill="#000000" opacity="0.3" x="11" y="7" width="8" height="8" rx="4"/>
                                                <circle className="mc-sidebar-icon" fill="#000000" cx="8" cy="18" r="3"/>
                                            </g>
                                        </svg>
                                    </span>
                                    Remittance Report
                                </div>
                                </NavLink>
                                <div className="collapsible-body metronic-dark-bg"></div>
                            </li>
                            <li>
                            <NavLink to="/winning-claimed-report" className="padding-none sidenav-close">
                                <div className="collapsible-header text-darken-2">
                                    <span className="mc-sidebar-icon active">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24"/>
                                                <path className="mc-sidebar-icon" d="M2,6 L21,6 C21.5522847,6 22,6.44771525 22,7 L22,17 C22,17.5522847 21.5522847,18 21,18 L2,18 C1.44771525,18 1,17.5522847 1,17 L1,7 C1,6.44771525 1.44771525,6 2,6 Z M11.5,16 C13.709139,16 15.5,14.209139 15.5,12 C15.5,9.790861 13.709139,8 11.5,8 C9.290861,8 7.5,9.790861 7.5,12 C7.5,14.209139 9.290861,16 11.5,16 Z" id="Combined-Shape-Copy" fill="#000000" opacity="0.3" transform="translate(11.500000, 12.000000) rotate(-345.000000) translate(-11.500000, -12.000000) "/>
                                                <path className="mc-sidebar-icon" d="M2,6 L21,6 C21.5522847,6 22,6.44771525 22,7 L22,17 C22,17.5522847 21.5522847,18 21,18 L2,18 C1.44771525,18 1,17.5522847 1,17 L1,7 C1,6.44771525 1.44771525,6 2,6 Z M11.5,16 C13.709139,16 15.5,14.209139 15.5,12 C15.5,9.790861 13.709139,8 11.5,8 C9.290861,8 7.5,9.790861 7.5,12 C7.5,14.209139 9.290861,16 11.5,16 Z M11.5,14 C12.6045695,14 13.5,13.1045695 13.5,12 C13.5,10.8954305 12.6045695,10 11.5,10 C10.3954305,10 9.5,10.8954305 9.5,12 C9.5,13.1045695 10.3954305,14 11.5,14 Z" id="Combined-Shape" fill="#000000"/>
                                            </g>
                                        </svg>
                                    </span>
                                    Winning Claimed Report
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
 
export default withRouter(TreasuryNav);