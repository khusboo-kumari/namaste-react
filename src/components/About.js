import User from "./User";
import UserClass from "./UserClass";
// import React from "react";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About Class Component </h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2> This is Namaste React Web Series </h2>

        <User name={"Khusboo  just few weeks left yesss !!!(function) "} />
        <UserClass
          name={" Purkuu  just few weeks left yesss !!! (class) "}
          location={"Dehradun Class"}
        />
      </div>
    );
  }
}

//  Functional Based Component .
// const About = () =>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2> This is Namaste React Web Series </h2>
//             <User name={"Khusboo  just few weeks left yesss !!!(function) "}/>
//             <UserClass  name={" Purkuu  just few weeks left yesss !!! (class) "} location={"Dehradun Class"} />
//         </div>
//     );
// };
export default About;
