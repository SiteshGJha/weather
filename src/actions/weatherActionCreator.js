import axios from 'axios';
import { API_KEY, ROOT_URL } from '../utils/constant';
import { ACTION_TYPE_LIST } from './actionTypeList'

export const fetchWeather = (city) => {
    const url =`${ROOT_URL}&q=${city},us`;
    const request =  axios.get(url);

    return {
        type: ACTION_TYPE_LIST.FETCH_WEATHER,
        payload: request
    }
}
