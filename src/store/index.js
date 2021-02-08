import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import globalStats from '../reducers/global-stats'
import countriesStats from '../reducers/coutries-stats'
import countryInfo from '../reducers/country-info'

const reducers = combineReducers({
    globalStats,
    countriesStats,
    countryInfo,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store