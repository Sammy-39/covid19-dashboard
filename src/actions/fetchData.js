
export const fetchGlobalStats = () =>{
    return async (dispatch) => {
        var res = await fetch('https://corona.lmao.ninja/v2/all/')
        var resData = await res.json();
        dispatch({type:'global', payload: resData})
    }
}

export const fetchCountriesStats = (sortby) =>{
    return async (dispatch) =>{
        var res = await fetch(`https://corona.lmao.ninja/v2/countries?sort=${sortby}`)
        var resData = await res.json()
        dispatch({type:'countries', payload: resData})
    }
}

export const fetchCountryInfo = (countryName) =>{
    return async (dispatch) =>{
        var res = await fetch(`https://corona.lmao.ninja/v2/countries/${countryName}`)
        var resData = await res.json()
        dispatch({type:'country', payload: resData})
    }
}
