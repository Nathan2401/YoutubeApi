import axios from 'axios';


const KEY = 'AIzaSyA_G8bXPnM9YJ6McfnoVZaEJmWTpwwwoN0';


export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});
