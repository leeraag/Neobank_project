import axios from "axios";
import { API_URL_PRESCORING } from '../constant/api';

export const postPrescoring = ( data: {} ) => {
    axios.post(API_URL_PRESCORING, data)
    .then(function (response) {
        console.log(response);
    }).catch(function (response) {
        console.log(response);
    });
}