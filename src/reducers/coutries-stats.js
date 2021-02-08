const initialState = {
    stats: {}
}

const countriesStats = (state=initialState,action)=>{
    switch(action.type){
        case 'countries':
            return {...state, stats: action.payload}
        default:
            return state
    }
}

export default countriesStats