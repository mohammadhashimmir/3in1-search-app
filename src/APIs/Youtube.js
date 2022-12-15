import axios from 'axios';
const KEY="AIzaSyCbh_Tp1UYh9p5WkchUuIWRvQJizVR_Qrc";
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3' ,
    params:{ 
        part:'snippet', 
        maxResults:5,
        type:"video",
        key: KEY
} 
});