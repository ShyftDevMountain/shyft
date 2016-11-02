import React from 'react';
import './RidesComp.css';


import {getLocation} from '../../../services/GetGoogleMap.js';
import {getNearByDrivers} from '../../../services/GetGoogleMap.js';
import MapComp from '../RidesMap/MapComp.jsx'




class RidesComp extends React.Component{
constructor(props){
  super(props);
  this.state = {

  }
}
componentDidMount() {
  var self = this;
getLocation().then(function(res){
  getNearByDrivers(res.data.location).then(function(response){

    self.setState({
      initialCenter: {
        lat: res.data.location.lat,
        lng: res.data.location.lng
      },

      nearByDrives: response.data.nearby_drivers[0].drivers[0].locations


    })
  })

})

}


    render(){
        return (
            <div>

                <MapComp initialCenter={this.state.initialCenter} nearByDrives={this.state.nearByDrives} />


            </div>
        );
    }
};

export default RidesComp;
