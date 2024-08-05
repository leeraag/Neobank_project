import axios from "axios";
import { API_URL_PAYMENTS } from '@constant';

export const getApplicationStatus = ( applicationId: number ) =>
    axios.get(API_URL_PAYMENTS + applicationId)
    .then(function (response) {
        console.log(response);
        return response.data.status
    }).catch(function (response) {
        console.log(response);
    });