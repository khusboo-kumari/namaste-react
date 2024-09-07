//  Lets write a hook 
import { useEffect, useState } from "react" ; 
import { MENU_API } from "../utils/constants" ;  
const useRestaurantMenu = (resId) => {
    //  fetchdata 
    const[resInfo, setResInfo] = useState(null) ; 
    
    useEffect(()=>{
        fetchData() ;                
    }, []) ;              // we want to fetch data only once, so we need this empty [] 
   
    const fetchData = async() =>{
        const data = await fetch(MENU_API + resId ) ;
        const json = await data.json() ;  
        setResInfo(json.data) ; 
    }

    return resInfo ; 
}
export default useRestaurantMenu ; 