const initialState = {
    stats: {}
}

const countryInfo = (state=initialState,action)=>{
    switch(action.type){
        case 'country':
            return {...state, stats: action.payload}
        default:
            return state
    }
}

export default countryInfo