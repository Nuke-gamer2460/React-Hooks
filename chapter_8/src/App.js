import React from "react-bootstrap";
//import Products from "./Products";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form, Button } from "react-bootstrap/lib/Navbar";
import Github from "./GitHub";


function App(props) {
  return (
    <Navbar username={props.username} />
  )
}

export default App;