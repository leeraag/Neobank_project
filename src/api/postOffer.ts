import axios from "axios";
import { API_URL_OFFER } from '@constant';

export const postOffer = ( data: {} ) =>
    axios.post(API_URL_OFFER, data)
    .then(function (response) {
        console.log(response);
        return true;
    }).catch(function (response) {
        console.log(response);
    });