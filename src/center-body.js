import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCountryInfo } from "./actions/fetchData"

import Spinners from './spinners'
import InfoCard from './infoCard'

const CenterBody = ({value}) =>{

    const [countryData, setCountryData] = useState({})
 
    const state = useSelector(state=>state.countryInfo.stats)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchCountryInfo('India'))
    }, [])

   useEffect(()=>{
       if(Object.keys(state).length !== 0){
            setCountryData(state)
            console.log(state)
       }
   },[state])

    return(
        <>
            <div className='center-title'>
                <h4> Country: {state.country} </h4>
            </div>
            <div className='center-body'>
                {Object.keys(state).length === 0 && <Spinners />}
                {Object.keys(state).length !== 0 && <InfoCard title={'Total Cases'} value={state.cases} />}
                {Object.keys(state).length !== 0 && <InfoCard title={'Deaths'} value={state.deaths} />}
                {Object.keys(state).length !== 0 && <InfoCard title={'Active'} value={state.active} />}
                {Object.keys(state).length !== 0 && <InfoCard title={'Recovered'} value={state.recovered} />}
                {Object.keys(state).length !== 0 && <InfoCard title={'Tests'} value={state.tests} />}
                {Object.keys(state).length !== 0 && <InfoCard title={'Critical'} value={state.critical} />}
                {Object.keys(state).length !== 0 && <InfoCard title={'Tests per Million'} value={state.testsPerOneMillion} />}
                {Object.keys(state).length !== 0 && <InfoCard title={'Today Cases'} value={state.todayCases} />}
                {Object.keys(state).length !== 0 && <InfoCard title={'Today Death'} value={state.todayDeaths} />}
                {Object.keys(state).length !== 0 && <InfoCard title={'Today Recovered'} value={state.todayRecovered} />}
            </div>
        </>
    )
}

export default CenterBody