import { useState } from "react"

const SearchForm = (props) =>{
    const [ipValue,setIpValue] = useState('')
    
    return(
        <form className="form mb-3 mt-3 col-sm-11 col-md-9 col-lg-7 col-xl-6" onSubmit={(e)=>{ setIpValue(''); return props.search(e,ipValue)}}>

            <i className="fas fa-search search" onClick={(e)=>{ setIpValue(''); return props.search(e,ipValue)}}></i>

            <input type="text" className="form-control search-input" 
            value={ipValue} onChange={(e)=>setIpValue(e.target.value)} 
            placeholder="Country Name" />

        </form>
    )
}

export default SearchForm