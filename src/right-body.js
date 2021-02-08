
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import {fetchCountriesStats,fetchCountryInfo} from './actions/fetchData'

const RightBody = () =>{

    const dispatch = useDispatch()
    const state = useSelector(state=>state.countriesStats)

    const [countriesRecoveryData, setCountriesRecoveryData] = useState([])

    const getData = () =>{
        dispatch(fetchCountriesStats('recovered'))
    }

    useEffect(()=>{
        getData()
    }, [])

    useEffect(()=>{
        if(state.stats)
            setCountriesRecoveryData(state.stats)
    },[state])

    const handleClick = (countryName) =>{
        dispatch(fetchCountryInfo(countryName))
    }

    return(
        <div className='left-body'>
            <table className='table table-dark table-hover table-responsive'>
                <tbody>
                    { countriesRecoveryData.length>0 && countriesRecoveryData.slice(0,12).map((item,idx)=>(
                        <tr key={idx} onClick={()=>handleClick(item.country)}>
                            <td> {item.country} </td>
                            <td> {item.recovered} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RightBody