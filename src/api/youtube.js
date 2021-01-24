import axios from 'axios'; /* axios , being an HTTP CLIENT LIBRARY*/

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',/*giving the base url where we axios youtube v3 key*/
});