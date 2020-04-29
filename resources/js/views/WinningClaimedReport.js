import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar';

class WinningClaimedReport extends React.Component {
    
    render() { 
        return ( 
            <div className="App">
                <Header title="Winning Claimed Report" />
                <article>
                    <SideBar/>
                    <main>
                        <div className="row padding-all-15 padding-top-0 m-top-15">
                            <div className="col s12 metronic-white-bg">
                                <p>
                                    Live Stream
                                </p>
                                <div className="input-field col s10" >
                                    <input id="YtURL" type="text" className="validate" />
                                    <label className="active" htmlFor="YtURL">Youtube Url</label>
                                </div>
                                <div className="input-field col s2">
                                    <a className="waves-effect waves-light btn">
                                        <i className="material-icons left">cloud_upload</i>
                                        Save</a>
                                </div>
                            </div>
                            <div id="PreviewYt" className="col s12 metronic-white-bg m-top-15 display-none hidden">
                                <p>Preview</p>
                                <div id="iframeYt" className="padding-bottom-default">
                                    <iframe src="" frameBorder='0' allowFullScreen></iframe>
                                </div>  
                            </div>
                        </div>
                    </main>
                </article>
            </div>
         );
    }
}
 
export default WinningClaimedReport;