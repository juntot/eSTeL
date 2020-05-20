import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar';

const $ = window.$;

class LiveStream extends React.Component{
    componentDidMount(){

        $('#YtURL').change(function () {
            var youTubeUri = $('#YtURL').val();
            var youTubeVideoId = get_youtubeId(youTubeUri);
            loadYouTubeVideo(youTubeVideoId);
            $('#PreviewYt').css('display', 'block');
        }); 
    

        function get_youtubeId(url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
                return match[2];
            } else {
                //error
            }
        }

        function loadYouTubeVideo(id){
            $('#iframeYt iframe').attr("src", '//www.youtube.com/embed/'+id);
        }
    }
    render(){
        return(
            <div className="App">
                <Header title="Live Stream" />
                <article>
                    <SideBar/>
                    <main>
                        <div className="row padding-all-15 padding-top-0 m-top-15">
                            <div className="col s12 metronic-white-bg">
                                <p>
                                    Live Stream
                                </p>
                                <div className="input-field col xl10 l9 m9 s12" >
                                    <input id="YtURL" type="text" className="validate" />
                                    <label className="active" htmlFor="YtURL">Youtube Url</label>
                                </div>
                                <div className="input-field col xl2 l3 m3 s12">
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
export default LiveStream;