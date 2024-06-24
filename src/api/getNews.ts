import axios from "axios";
import { API_URL_NEWS } from '../constant/api';

export const getNews = () => axios.get(API_URL_NEWS)
    .catch(function (error) {
        if (error.response) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
            console.log(error.request);
        } else {
        // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
