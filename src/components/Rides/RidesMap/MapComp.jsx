import React from 'react';
import ReactDOM from 'react-dom';

import './MapComp.css';
import {getNearByDrivers} from '../../../services/GetGoogleMap.js';
import {getLocation} from '../../../services/GetGoogleMap.js';



class MapComp extends React.Component {
    constructor(props) {
      super(props);
        this.state = {

          }

        }



    render() {
     return (<div className="map">
       <div className='map-page' ref="mapCanvas">
       </div>

                                         <div className='RequestRides'>

                                             <div className='second'>

                                                 <div className='fristBox'>
                                                     <div className='box_for_google_text'>
                                                     <div className='g'>G</div>
                                                     <div className='o'>o</div>
                                                     <div className='o2'>o</div>
                                                     <div className='g'>g</div>
                                                     <div className='l'>l</div>
                                                     <div className='o'>e</div>
                                                     </div>
                                                     <div className='gps'></div>
                                                 </div>

                                                 <div className='secondBox'>
                                                   <div className='car_icon'>
                                                     Shyft
                                                   </div>
                                                          <div className='content'>
                                                                   <div className='location'>
                                                                      location
                                                                   </div>
                                                                   <div className='pickup_location'>
                                                                      PickUp location
                                                                   </div>
                                                          </div>
                                                 </div>

                                                 <div className='secondBox2'>

                                                   <div className='pickup_button'>
                                                     Set PickUp
                                                   </div>

                                                 </div>

                                             </div>


                                       </div>

     </div>)

   }



   componentDidUpdate() {
      this.map = this.createMap()
      this.createArray(this.props.nearByDrives)
      this.createCurrentLocationMarker()
   }

  createArray(arr) {

    var drivers = arr.map(function(val, i){

          return {
           position: new google.maps.LatLng(val.lat, val.lng)
          }
    })
      console.log(drivers);
    for (var i = 0; i <drivers.length; i++) {
          this.createMarker(drivers[i])
    }

  }



   createMap() {
     let mapOptions = {
       zoom: 12,
       center: this.mapCenter()
     }
     return new google.maps.Map(this.refs.mapCanvas, mapOptions)
   }


   mapCenter() {
     return new google.maps.LatLng(

       this.props.initialCenter.lat,
       this.props.initialCenter.lng
     )
   }

   createMarker(feature) {
     return new google.maps.Marker({
     position: feature.position,
     map: this.map
   })

    }
    createCurrentLocationMarker() {
      return new google.maps.Marker({
      position: this.mapCenter(),
      map: this.map
    })

     }

}



export default MapComp
