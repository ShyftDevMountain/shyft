import axios from 'axios';

export function getLocation() {
  return axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDrzX2pFc5mTwnwwA2cqXKo2nLVV2Zkq5I')

}



var lyftToken = {
  headers: { 'Authorization' : 'Bearer "gAAAAABYGlWbMEMn9Sgo900TGeX6PIlaWgjOTJSh4U0TQpXwdg1LQXrataOaK1ryY-pgoW9f8WPUjImNPmHPN2O5bVWihVPbB7z4SQZ3HYOpJmsLHtpalfvuD_sVlaZyFIaezzptXWbLWoikagqU9W860XSentCameqiAZ2B70GbI_vJc25wjjl5Uz5013dtY1_XHCboHPrzpze9teYmJMoew-zMHokylQ=="'
  }
}

export function getNearByDrivers(cord) {
  return axios.get('https://api.lyft.com/v1/drivers?lat='+ cord.lat.toString() +'&lng='+ cord.lng.toString(), lyftToken)

}
