import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo : {
            name : "Purkuuu",
            location : " Default",
            avatar_url  : "https://www.istockphoto.com/photo/cute-panda-bear-climbing-in-tree-gm523761634-92038289" 
        }
    }; 

  }

  async componentDidMount(){
        const data = await fetch("https://api.github.com/users/khusboo-kumari") ;
        const json = await data.json() ; 
        // consolelog(json) ;  

        this.setState({
            userInfo : json,  
        }) ;   
         
  }
  render() {
    //   Destructuring . 
    const {name, location, public_repos, avatar_url} = this.state.userInfo ; 
    return (
      <div className="user-card">
        <h2>Name: {name}</h2> 
        <h3>Location : {location}</h3>
        <h3>My Total Repos : {public_repos}</h3>
        <h4>Photowa : {avatar_url}</h4>
        <img
        src={avatar_url}></img>
        <h4>Contact: @Purkaaa</h4>  
      </div>
    );
  }
}

export default UserClass;
