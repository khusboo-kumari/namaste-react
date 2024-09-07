import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Default User Purkaaa ",       // default value is passed here 
}) ; 

export default UserContext ;  