import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should be loaded, the contact us componenent ", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");  

  //  Assertion .
  expect(heading).toBeInTheDocument(); 
}); 

 test("Should  load button inside Contact Componenent", ()=>{
   render(<Contact/>) ; 
   const button = screen.getByRole("button") ;
  //   const button = screen.getByText("button") ;
  //  * Assertion 
  expect(button).toBeInTheDocument() ; 
 });

 test("Should input name inside Contact Component", ()=>{
      render(<Contact/>) ;  
      const inputName = screen.getByPlaceholderText('name') ; 
      //  * Assertion 
      expect(inputName) = screen.toBeInTheDocument() ; 
 });




