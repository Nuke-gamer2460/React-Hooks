import React from "react";
//import Products from "./Products";
import 'bootstrap/dist/css/bootstrap.min.css';
//import HelloWorld from './HelloWorld'
import JumbotronComponent from "./HelloWorld";

function App() {

  const isValid = true;

  return (
    <JumbotronComponent>
    This is a long sentence, and I want to insert content into the
    jumbotron component from the outside.
    </JumbotronComponent>
  )
}

export default App;