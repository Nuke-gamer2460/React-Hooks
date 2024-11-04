import React from "react-bootstrap";
//import Products from "./Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap/lib/Navbar";


function App() {

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)} value={email}/>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
          onChange={event => setPassword(event.target.value)} value={password}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <div>
        Email entered: {email}
        <br />
        Password entered: {password}
      </div>
    </Form>
  )
}

export default App;