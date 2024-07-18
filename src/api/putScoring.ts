import axios from "axios";
import { API_URL_SCORING } from '@constant';

export const putScoring = ( applicationId: number, data: {} ) =>
    axios.put(API_URL_SCORING + applicationId, data)
    .then(function (response) {
        console.log(response);
        return true
    }).catch(function (response) {
        console.log(response);
    });