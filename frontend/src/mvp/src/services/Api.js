import axios from 'axios';

const Api = axios.create({
    //Url padrão quando subir o container docker do backend
    baseURL: 'https://api-backend-1221.herokuapp.com/'
})

export default Api;