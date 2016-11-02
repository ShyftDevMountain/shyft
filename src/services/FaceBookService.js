import axios from 'axios';

export function getFb() {
  return axios.get('/auth/facebook')
  .then(res => res.data);
  console.log(data);
}
console.log();
