import axios from "axios";
import { API_KEY_CURRENCY, API_HOST_CURRENCY, API_URL_CURRENCY} from '../constant/api';

export const getCurrencies =  (currencies: any) => {
    const convert = currencies.map((currency: any) => {
        const options = {
            method: 'GET',
            url: API_URL_CURRENCY,
            params: {
                from: currency.from,
                to: currency.to,
                q: '1.0'
            },
            headers: {
                'X-RapidAPI-Key': API_KEY_CURRENCY,
                'X-RapidAPI-Host': API_HOST_CURRENCY
            }
        };
        return axios.request(options);
    })
    return Promise.allSettled(convert);
}