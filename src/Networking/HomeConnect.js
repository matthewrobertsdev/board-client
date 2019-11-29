import axios from 'axios';
 
//gives axios connection to the home of the server
const homeConnect=axios.create({
    baseURL: 'http://localhost:8080'
});

export default homeConnect;