/*  In normal html, we build parent child like this, But in React we do that way ... 
    <div id = " parent">
          <div id = "child" >
           <h1> I am h1 tag </h1> 
          </div>
    </div>
*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am that h1 Tag"),
        React.createElement("h2", {}, "I am that h2222 Tag"),
      ]),
      React.createElement("div", { id: "child2" }, [
        React.createElement("h4", {}, "I am that h4 Tag") , 
        React.createElement("h3" , {}, "I am that h3  Tag") , 
      ])
  ]
);

// const heading = React.createElement(
//     "h1",
//      {id:"heading", xyz : "this is attributes"},
//     "Hello Purkuu from React "
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//  Now lets render the parent
console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
