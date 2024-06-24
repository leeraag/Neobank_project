import axios from "axios";
import { API_URL_NEWS } from '../constant/api';

export const getNews = () => axios.get(API_URL_NEWS);