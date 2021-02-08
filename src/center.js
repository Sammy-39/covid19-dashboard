import { useState } from "react"
import { useDispatch } from "react-redux"

import { fetchCountryInfo } from "./actions/fetchData"
import CenterBody from "./center-body"
import SearchForm from "./searchForm"

const Center = () =>{

    const dispatch = useDispatch()

    const handleSearch = (e,value) =>{
        e.preventDefault() 
        dispatch(fetchCountryInfo(value))
    }

    return(
        <div className='center'>
            <SearchForm search={(e,value)=>handleSearch(e,value)} />
            <CenterBody />
        </div>
    )
}

export default Center