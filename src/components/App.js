import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import GetImageForm from './GetImageForm';

class App extends Component {

  constructor (props) {
    super(props)

    // this.state = {
    //   rover: "Curiosity",
    //   camera: "FHAZ",
    //   images: [],
    //   sol: "1000"
    // }


  }



  render() {
    return (

      <GetImageForm stateData={this.state}/>
    );
  }
}





export default App;
