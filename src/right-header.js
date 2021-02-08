import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import {fetchGlobalStats} from './actions/fetchData'
import Spinners from './spinners'

const RightHeader = () =>{

    const state = useSelector(state=>state.globalStats)
    const dispatch = useDispatch()

    const [totalRecovered, setTotalRecovered] = useState('')

    const getData = () =>{
        dispatch(fetchGlobalStats())
    }

    useEffect(()=>{
        getData()
    }, [])

    useEffect(()=>{
        if(state.stats)
            setTotalRecovered(state.stats.recovered)
    },[state])

    return(
        <div className='right-head'>
            <p className='right-head-title'> Total Recovered </p>
            { totalRecovered && <p className='left-head-value'> {totalRecovered} </p>}
            { !totalRecovered && <Spinners />}
        </div>
    )
}

export default RightHeader