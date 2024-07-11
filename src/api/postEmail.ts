import axios from "axios";
import { API_URL_EMAIL } from '../constant/api';

export const postEmail = (emailValue: string) => axios.post(API_URL_EMAIL, {
    email: emailValue
}).then(function (response) {
    console.log(response);
}).catch(function (response) {
    console.log(response);
});