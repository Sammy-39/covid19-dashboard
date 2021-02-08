const initialState = {
    stats: {}
}

const globalStats = (state=initialState,action)=>{
    switch(action.type){
        case 'global':
            return {...state, stats: action.payload}
        default:
            return state
    }
}

export default globalStats