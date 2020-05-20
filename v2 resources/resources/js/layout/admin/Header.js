import React from 'react'
import Nav from './Nav'
const Header = (props) => {
     
        return (
            <header>
                {/* <!-- BEGIN NAV --> */}
                <Nav title={props.title}/>
                {/* <!-- END NAV --> */}
            </header>
        );
}
 
export default Header;