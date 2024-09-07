import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // In this hook we dont need any information, we just have to check the online and offlien status .

  const [onlineStatus, setOnlineStatus] = useState(true);

  //  Check if online

  useEffect(() => {
    window.addEventListener("offline", (event) => { 
      setOnlineStatus(false); 
    });

    window.addEventListener("online", ()=>{
        setOnlineStatus(true) ; 
    })
  }, []); 

  // boolean Value
  return onlineStatus;
};

export default useOnlineStatus;
