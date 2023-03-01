import axios from 'axios';

const alkemyApi = axios.create({
    baseURL: 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com'
});

// Configurar Interceptores
alkemyApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'jwt-token': localStorage.getItem('token')
    };

    return config;
});

export default alkemyApi;
