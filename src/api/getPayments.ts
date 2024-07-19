import axios from "axios";
import { API_URL_PAYMENTS } from '@constant';

export const getPayments = ( applicationId: number ) =>
    axios.get(API_URL_PAYMENTS + applicationId)
    .then(function (response) {
        console.log(response);
        return response.data.credit.paymentSchedule
    }).catch(function (response) {
        console.log(response);
    });