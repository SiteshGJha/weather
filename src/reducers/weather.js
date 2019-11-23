import { ACTION_TYPE_LIST } from '../actions/actionTypeList';

const Weather = (weather, action) => {
    switch(action.type) {
        case ACTION_TYPE_LIST.FETCH_WEATHER + "_PENDING": {
            return { ...weather }
        }
        case ACTION_TYPE_LIST.FETCH_WEATHER + "_FULFILLED":
            return {
                ...weather,
                data: action.payload.data
            }
        default:
            return {
                ...weather
            }
    }
}

export default Weather;