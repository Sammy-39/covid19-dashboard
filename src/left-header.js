import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import {fetchGlobalStats} from './actions/fetchData'
import Spinners from './spinners'

const LeftHeader = () =>{

    const dispatch = useDispatch()
    const state = useSelector(state=>state.globalStats)

    const [totalConfirmed, setTotalConfirmed] = useState('')

    const getData = () =>{
        dispatch(fetchGlobalStats())
    }
    
    useEffect(()=>{
        getData()
    }, [])

    useEffect(()=>{
        if(state.stats)
            setTotalConfirmed(state.stats.cases)
    },[state])

    return(
        <header className='left-head'>
            <p className='left-head-title'> Total Confirmed </p>
            { totalConfirmed && <p className='left-head-value'> {totalConfirmed} </p>}
            {!totalConfirmed && <Spinners />}
        </header>
    )
}

export default LeftHeader