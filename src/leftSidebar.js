import LeftBody from "./left-body"
import LeftHeader from "./left-header"

const LeftSideBar = () =>{
    return(
        <div className='left-sidebar'>
            <LeftHeader />
            <LeftBody />
        </div>
    )
}

export default LeftSideBar