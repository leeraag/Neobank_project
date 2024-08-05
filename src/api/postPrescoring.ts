import axios from "axios";
import { API_URL_PRESCORING } from '@constant';
import { IPrescoringForm } from "../types/interfaces";

export const postPrescoring = ( data: IPrescoringForm ) =>
    axios.post(API_URL_PRESCORING, data)
    .then(function (response) {
        console.log(response);
        return response.data
    }).catch(function (response) {
        console.log(response);
    });