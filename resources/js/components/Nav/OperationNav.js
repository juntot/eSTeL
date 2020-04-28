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
                            <NavLink to="/game-profile" className="padding-none sidenav-close">
                                <div className="collapsible-header text-darken-2">
                                    <span className="mc-sidebar-icon active">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                <rect className="mc-sidebar-icon" x="4" y="4" width="7" height="7" rx="1.5"></rect>
                                                <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" 
                                                className="mc-sidebar-icon" opacity="0.3"></path>
                                            </g>
                                        </svg> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                <path className="mc-sidebar-icon" d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" id="Combined-Shape" fill="#000000"></path>
                                                <path className="mc-sidebar-icon" d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" id="Combined-Shape" fill="#000000" opacity="0.3"></path>
                                            </g>
                                        </svg>
                                    </span>
                                    Game Profile
                                </div>
                                </NavLink>
                                <div className="collapsible-body metronic-dark-bg"></div>
                            </li>
                            <li>
                            <NavLink to="/result-posting" className="padding-none sidenav-close">
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
                                    Result Posting
                                </div>
                                </NavLink>
                                <div className="collapsible-body metronic-dark-bg"></div>
                            </li>
                            <li>
                            <NavLink to="/livestream" className="padding-none sidenav-close">
                                <div className="collapsible-header text-darken-2">
                                    <span className="mc-sidebar-icon active">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                <rect className="mc-sidebar-icon" id="Combined-Shape" fill="#000000" opacity="0.3" x="2" y="3" width="20" height="18" rx="2"></rect>
                                                <path className="mc-sidebar-icon" d="M9.9486833,13.3162278 C9.81256925,13.7245699 9.43043041,14 9,14 L5,14 C4.44771525,14 4,13.5522847 4,13 C4,12.4477153 4.44771525,12 5,12 L8.27924078,12 L10.0513167,6.68377223 C10.367686,5.73466443 11.7274983,5.78688777 11.9701425,6.75746437 L13.8145063,14.1349195 L14.6055728,12.5527864 C14.7749648,12.2140024 15.1212279,12 15.5,12 L19,12 C19.5522847,12 20,12.4477153 20,13 C20,13.5522847 19.5522847,14 19,14 L16.118034,14 L14.3944272,17.4472136 C13.9792313,18.2776054 12.7550291,18.143222 12.5298575,17.2425356 L10.8627389,10.5740611 L9.9486833,13.3162278 Z" id="Path-108" fill="#000000" fillRule="nonzero"></path>
                                                <circle id="Oval" fill="#000000" opacity="0.3" cx="19" cy="6" r="1"></circle>
                                            </g>
                                        </svg>
                                    </span>
                                    Live Stream
                                </div>
                                </NavLink>
                                <div className="collapsible-body metronic-dark-bg"></div>
                            </li>
                            <li>
                                <a className="padding-none parent-menu">
                                    <div className="collapsible-header">
                                        <span className="mc-sidebar-icon active">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <rect className="mc-sidebar-icon" id="Rectangle-151" fill="#000000" opacity="0.3" x="4" y="4" width="8" height="16"></rect>
                                                    <path className="mc-sidebar-icon" d="M6,18 L9,18 C9.66666667,18.1143819 10,18.4477153 10,19 C10,19.5522847 9.66666667,19.8856181 9,20 L4,20 L4,15 C4,14.3333333 4.33333333,14 5,14 C5.66666667,14 6,14.3333333 6,15 L6,18 Z M18,18 L18,15 C18.1143819,14.3333333 18.4477153,14 19,14 C19.5522847,14 19.8856181,14.3333333 20,15 L20,20 L15,20 C14.3333333,20 14,19.6666667 14,19 C14,18.3333333 14.3333333,18 15,18 L18,18 Z M18,6 L15,6 C14.3333333,5.88561808 14,5.55228475 14,5 C14,4.44771525 14.3333333,4.11438192 15,4 L20,4 L20,9 C20,9.66666667 19.6666667,10 19,10 C18.3333333,10 18,9.66666667 18,9 L18,6 Z M6,6 L6,9 C5.88561808,9.66666667 5.55228475,10 5,10 C4.44771525,10 4.11438192,9.66666667 4,9 L4,4 L9,4 C9.66666667,4 10,4.33333333 10,5 C10,5.66666667 9.66666667,6 9,6 L6,6 Z" id="Combined-Shape" fill="#000000" fillRule="nonzero"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Ball Draws
                                    </div>
                                </a>
                                <div className="collapsible-body metronic-dark-bg">
                                    <ul className="collapsible">
                                        <li>
                                            <div className="collapsible-header">
                                                <ul className="main-ul" id="slide-out">
                                                    <li>
                                                        <NavLink to="/all-draw" className="sidenav-close">
                                                            <i className="li-bullet d-flex">
                                                                <span className="bullet"></span>
                                                            </i>
                                                            <span>All</span>
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="collapsible-body metronic-dark-bg">
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header">
                                                <ul className="main-ul" id="slide-out">
                                                    <li>
                                                        <NavLink to="/pares" className="sidenav-close" >
                                                            <i className="li-bullet d-flex">
                                                                <span className="bullet"></span>
                                                            </i>
                                                            <span>Pares</span>
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="collapsible-body metronic-dark-bg">
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header">
                                                <ul className="main-ul" id="slide-out">
                                                    <li>
                                                        <NavLink to="/ball2" className="sidenav-close">
                                                            <i className="li-bullet d-flex">
                                                                <span className="bullet"></span>
                                                            </i>
                                                            <span>Swer 2</span>
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="collapsible-body metronic-dark-bg">
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header">
                                                <ul className="main-ul" id="slide-out">
                                                    <li>
                                                        <NavLink to="/ball3" className="sidenav-close">
                                                            <i className="li-bullet d-flex">
                                                                <span className="bullet"></span>
                                                            </i>
                                                            <span>Swer 3</span>
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="collapsible-body metronic-dark-bg">
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <li>
                                <div className="collapsible-header">
                                    <span className="mc-sidebar-icon active">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <rect className="mc-sidebar-icon" x="4" y="4" width="7" height="7" rx="1.5"></rect>
                                                    <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" 
                                                    className="mc-sidebar-icon" opacity="0.3"></path>
                                                </g>
                                            </svg>
                                    </span>
                                    Applications
                                </div>
                                <div className="collapsible-body metronic-dark-bg">
                                    <ul className="collapsible">
                                        <li>
                                            <div className="collapsible-header">
                                                <ul className="main-ul" id="slide-out">
                                                    <li>
                                                        <a className="sidenav-close" href="/">
                                                            <i className="li-bullet d-flex"><span className="bullet"></span></i>
                                                            <span>
                                                                Employee.
                                                            </span>
                                                        </a>
                                                        
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}
                            <li>
                                <NavLink to="/text-blast" className="padding-none sidenav-close">
                                    <div className="collapsible-header text-darken-2">
                                        <span className="mc-sidebar-icon active">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <rect id="Rectangle-10" x="0" y="0" width="24" height="24"></rect>
                                                    <path className="mc-sidebar-icon" d="M16.3740377,19.9389434 L22.2226499,11.1660251 C22.4524142,10.8213786 22.3592838,10.3557266 22.0146373,10.1259623 C21.8914367,10.0438285 21.7466809,10 21.5986122,10 L17,10 L17,4.47708173 C17,4.06286817 16.6642136,3.72708173 16.25,3.72708173 C15.9992351,3.72708173 15.7650616,3.85240758 15.6259623,4.06105658 L9.7773501,12.8339749 C9.54758575,13.1786214 9.64071616,13.6442734 9.98536267,13.8740377 C10.1085633,13.9561715 10.2533191,14 10.4013878,14 L15,14 L15,19.5229183 C15,19.9371318 15.3357864,20.2729183 15.75,20.2729183 C16.0007649,20.2729183 16.2349384,20.1475924 16.3740377,19.9389434 Z" id="Path-3" fill="#000000"></path>
                                                    <path className="mc-sidebar-icon" d="M4.5,5 L9.5,5 C10.3284271,5 11,5.67157288 11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L4.5,8 C3.67157288,8 3,7.32842712 3,6.5 C3,5.67157288 3.67157288,5 4.5,5 Z M4.5,17 L9.5,17 C10.3284271,17 11,17.6715729 11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L4.5,20 C3.67157288,20 3,19.3284271 3,18.5 C3,17.6715729 3.67157288,17 4.5,17 Z M2.5,11 L6.5,11 C7.32842712,11 8,11.6715729 8,12.5 C8,13.3284271 7.32842712,14 6.5,14 L2.5,14 C1.67157288,14 1,13.3284271 1,12.5 C1,11.6715729 1.67157288,11 2.5,11 Z" id="Combined-Shape" fill="#000000" opacity="0.3"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Text Blast
                                    </div>
                                </NavLink>
                                <div className="collapsible-body metronic-dark-bg"></div>
                            </li>
                            <li>
                                <NavLink to="/location" className="padding-none sidenav-close">
                                    <div className="collapsible-header text-darken-2">
                                        <span className="mc-sidebar-icon active">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon active">
												<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
													<rect id="bound" x="0" y="0" width="24" height="24"></rect>
													<path className="mc-sidebar-icon" d="M13.6855025,18.7082217 C15.9113859,17.8189707 18.682885,17.2495635 22,17 C22,16.9325178 22,13.1012863 22,5.50630526 L21.9999762,5.50630526 C21.9999762,5.23017604 21.7761292,5.00632908 21.5,5.00632908 C21.4957817,5.00632908 21.4915635,5.00638247 21.4873465,5.00648922 C18.658231,5.07811173 15.8291155,5.74261533 13,7 C13,7.04449645 13,10.79246 13,18.2438906 L12.9999854,18.2438906 C12.9999854,18.520041 13.2238496,18.7439052 13.5,18.7439052 C13.5635398,18.7439052 13.6264972,18.7317946 13.6855025,18.7082217 Z" id="Combined-Shape" fill="#000000"></path>
													<path d="M10.3144829,18.7082217 C8.08859955,17.8189707 5.31710038,17.2495635 1.99998542,17 C1.99998542,16.9325178 1.99998542,13.1012863 1.99998542,5.50630526 L2.00000925,5.50630526 C2.00000925,5.23017604 2.22385621,5.00632908 2.49998542,5.00632908 C2.50420375,5.00632908 2.5084219,5.00638247 2.51263888,5.00648922 C5.34175439,5.07811173 8.17086991,5.74261533 10.9999854,7 C10.9999854,7.04449645 10.9999854,10.79246 10.9999854,18.2438906 L11,18.2438906 C11,18.520041 10.7761358,18.7439052 10.4999854,18.7439052 C10.4364457,18.7439052 10.3734882,18.7317946 10.3144829,18.7082217 Z" id="Path-41-Copy" fill="#000000" opacity="0.3"
                                                    className="mc-sidebar-icon"></path>
												</g>
											</svg>
                                        </span>
                                        Location
                                    </div>
                                </NavLink>
                                <div className="collapsible-body metronic-dark-bg"></div>
                            </li>
                            {/* <li>
                                <a className={this.state.pathname == 'employee' ? "padding-none active": "padding-none"}>
                                    <div className="collapsible-header">
                                        <span className="mc-sidebar-icon active">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                        <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                        <rect id="Rectangle-151" fill="#000000" opacity="0.3" x="4" y="4" width="8" height="16"></rect>
                                                        <path d="M6,18 L9,18 C9.66666667,18.1143819 10,18.4477153 10,19 C10,19.5522847 9.66666667,19.8856181 9,20 L4,20 L4,15 C4,14.3333333 4.33333333,14 5,14 C5.66666667,14 6,14.3333333 6,15 L6,18 Z M18,18 L18,15 C18.1143819,14.3333333 18.4477153,14 19,14 C19.5522847,14 19.8856181,14.3333333 20,15 L20,20 L15,20 C14.3333333,20 14,19.6666667 14,19 C14,18.3333333 14.3333333,18 15,18 L18,18 Z M18,6 L15,6 C14.3333333,5.88561808 14,5.55228475 14,5 C14,4.44771525 14.3333333,4.11438192 15,4 L20,4 L20,9 C20,9.66666667 19.6666667,10 19,10 C18.3333333,10 18,9.66666667 18,9 L18,6 Z M6,6 L6,9 C5.88561808,9.66666667 5.55228475,10 5,10 C4.44771525,10 4.11438192,9.66666667 4,9 L4,4 L9,4 C9.66666667,4 10,4.33333333 10,5 C10,5.66666667 9.66666667,6 9,6 L6,6 Z" 
                                                            className="mc-sidebar-icon" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                        </span>
                                        Pages
                                    </div>
                                </a>
                                <div className="collapsible-body metronic-dark-bg">
                                    <ul className="collapsible">
                                        <li>
                                            <div className="collapsible-header">
                                                <ul className="main-ul" id="slide-out">
                                                    <li>
                                                        <NavLink to="employee" className="sidenav-close">
                                                            <i className="li-bullet d-flex">
                                                                <span className="bullet"></span>
                                                            </i>
                                                            <span>Employee</span>
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="collapsible-body metronic-dark-bg">
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header">
                                                <ul className="main-ul">
                                                    <li>
                                                        <NavLink to="#" className="dropdown-trigger-submenu">
                                                            <i className="li-bullet d-flex">
                                                                <span className="bullet"></span>
                                                            </i>
                                                            <span>Users</span>
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="collapsible-body metronic-dark-bg">
                                                <ul id="submenu" className="main-ul submenu-ul">
                                                    <li>
                                                        <NavLink className="dropdown-trigger-submenu sidenav-close" to="/">
                                                            <i className="li-bullet d-flex">
                                                                <span className="bullet-disc"></span>
                                                            </i>
                                                            <span>User 1</span>
                                                        </NavLink>    
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header">
                                                <ul className="main-ul">
                                                    <li>
                                                        <a href="#" className="dropdown-trigger-submenu">
                                                            <i className="li-bullet d-flex">
                                                                <span className="bullet"></span>
                                                            </i>
                                                            <span>Schedules</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="collapsible-body metronic-dark-bg">
                                                <ul id="submenu" className="main-ul submenu-ul">
                                                    <li>
                                                        <a className='dropdown-trigger-submenu' href='/#'>
                                                            <i className="li-bullet d-flex">
                                                                <span className="bullet-disc"></span>
                                                            </i>
                                                            <span>Sched 1</span>
                                                        </a>    
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header">
                                    <span className="mc-sidebar-icon active">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <rect className="mc-sidebar-icon" x="4" y="4" width="7" height="7" rx="1.5"></rect>
                                                    <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" 
                                                    className="mc-sidebar-icon" opacity="0.3"></path>
                                                </g>
                                            </svg>
                                    </span>
                                    Applications
                                </div>
                                <div className="collapsible-body metronic-dark-bg">
                                    <ul className="collapsible">
                                        <li>
                                            <div className="collapsible-header">
                                                <ul className="main-ul" id="slide-out">
                                                    <li>
                                                        <a className="sidenav-close" href="/">
                                                            <i className="li-bullet d-flex"><span className="bullet"></span></i>
                                                            <span>
                                                                Employee.
                                                            </span>
                                                        </a>
                                                        
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}
                            {/* <li>
                                <label className="sidebar-group-text">components</label>
                            </li>
                            <li>
                                <div className="collapsible-header">
                                    <span className="mc-sidebar-icon active">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xNavlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <rect className="mc-sidebar-icon" x="4" y="4" width="7" height="7" rx="1.5"></rect>
                                                    <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" 
                                                    className="mc-sidebar-icon" opacity="0.3"></path>
                                                </g>
                                            </svg>
                                    </span>
                                    Component 1
                                </div>
                                <div className="collapsible-body metronic-dark-bg">
                                    
                                </div>
                            </li>
                            <li>
                                <NavLink to="/location" className="padding-none">
                                <div className="collapsible-header text-darken-2">
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
                                    locations
                                </div>
                                </NavLink>
                                <div className="collapsible-body metronic-dark-bg"></div>
                                
                            </li> */}
                            
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