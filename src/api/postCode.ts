import axios from "axios";
import { API_URL_DOCUMENT } from '@constant';

export const postCode = ( applicationId: number, verificationCode: string ) =>
    axios.post(API_URL_DOCUMENT + applicationId + "/sign/code", verificationCode, {
        headers: {
            "Content-Type": "application/json" // Updated Content-Type
        }
    })
    .then(function (response) {
        console.log(response);
        return true
    }).catch(function (response) {
        console.log(response);
    });