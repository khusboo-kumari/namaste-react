import {sum} from "../sum" ; 

test("sum function should calculate plus ", () =>{
    
      const result = sum(3,4) ;  
      //  Assertion  
      expect(result).toBe(7) ;     
}) ; 