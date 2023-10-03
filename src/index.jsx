import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./app";

class BasedComponent extends React.Component{
render(){
    return(
        <App />
    )
}
}
var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<BasedComponent/>);
