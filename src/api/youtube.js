import axios from 'axios';


const KEY = 'AIzaSyCn4jwIgLfe_cAk4e5GTojI7rGGNRQOjb4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
