import {takeEvery , put} from 'redux-saga/effects'
import { WEATHER, SET_WEATHER} from './constant'

function* setWeather (city){
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${city.data}&appid=0250330e89fd0dcacb3bf064f916abef`
    let response = yield fetch(url)
    let data = yield response.json()
    
    yield put({type: SET_WEATHER , payload:data})
   
   
}
 
function* product ()
{
    yield takeEvery(WEATHER , setWeather )
    
}
export default product