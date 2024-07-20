import axios from "axios";
import { API_URL_DOCUMENT } from '@constant';

export const postSign = ( applicationId: number ) =>
    axios.post(API_URL_DOCUMENT + applicationId + "/sign")
    .then(function (response) {
        console.log(response);
        return true
    }).catch(function (response) {
        console.log(response);
    });