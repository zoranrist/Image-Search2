import axios from 'axios';

// const searchImages = (term) => {

// }
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID sajYSJdvsm0N18YCLA5gPzTHJEfY2bXep1BroyZxytg'
    }
}); 