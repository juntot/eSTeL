import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar'
const M =  window.M;

class Location extends React.Component{

    componentDidMount(){
      var locations = [
        ['Bondi Beach', -33.890542, 151.274856, 4],
        ['Coogee Beach', -33.923036, 151.259052, 5],
        ['Cronulla Beach', -34.028249, 151.157507, 3],
        ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
        ['Maroubra Beach', -33.950198, 151.259302, 1]
      ];
  
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(-33.92, 151.25),
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.ROADMAP]
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
  
      var infowindow = new google.maps.InfoWindow();
  
      var marker, i;
  
      for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          // icon: {
          //   url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
          // },
          map: map
        });
  
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      };
      M.updateTextFields();
    }
    render(){
      
        return(
              <div className="App">
                <Header title="Location"/>
                <article>
                    <SideBar />
                    <main>
                        <div className="row padding-all-15 location padding-top-0">
                            <div className="clearfix"></div>
                            <div className="d-flex mobile-block">
                                <div className="col m4 s12 m-top-15">
                                  <div className="col s12 metronic-white-bg summary-grid push-height overflow-hidden col-loc-search">
                                      {/* search branch*/}
                                      <div className="input-field" >
                                          <i htmlFor="search-location" id="loc-icon-search" className="material-icons prefix">search</i>
                                          <input id="search-location" type="text" name="search-location" className="validate" placeholder="search here" />
                                          {/* <label htmlFor="search-location">search here</label> */}
                                      </div>
                                     
                                      <div className="branch-list">
                                          <div className="padding-all-15 relative">
                                            <div className="loc-name">Mandaue</div>
                                            <div className="loc-details">
                                              254-81-28
                                            </div>
                                            
                                              
                                          </div>
                                          {/* <hr className="summary-line teal"/> */}
                                          <div className="padding-all-15 relative">
                                            <div className="loc-name">Mingla</div>
                                            <div className="loc-details">
                                              254-81-28
                                            </div>
                                          </div>
                                          {/* <hr className="summary-line red"/> */}
                                          <div className="padding-all-15 relative">
                                            <div className="loc-name">Naga</div>
                                            <div className="loc-details">
                                              254-81-28
                                            </div>
                                          </div>
                                          <div className="padding-all-15 relative">
                                            <div className="loc-name">Lapu-Lapue</div>
                                            <div className="loc-details">
                                              254-81-28
                                            </div>
                                          </div>
                                          <div className="padding-all-15 relative">
                                            <div className="loc-name">A.C. Cortez</div>
                                            <div className="loc-details">
                                              254-81-28
                                            </div>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                                <div className="col m8 s12 m-top-15">
                                
                                  <div className="col s12 metronic-white-bg summary-grid">
                                      {/* <div className="main-wrap"> */}
                                            <div id="map" style={{width: 100+"%", height: 700+"px"}}></div>  
                                      {/* </div> */}
                                      
                                  </div>
                                
                                
                                </div>
                            </div>
                            
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}

export default Location;