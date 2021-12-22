import Welcome from './components/welcome';
import React, { useState, useEffect  } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import axios from 'axios';


  

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {saludo:"hola como esatas"}; 
  }
 
  render() {
    return (<div>
      <Welcome name={this.state.saludo} />
    </div>);
  }
}

export default App;
