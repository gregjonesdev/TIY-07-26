import React, { Component } from 'react';
import GetImageButton from './GetImageButton'

const api_key = "DvNdeDtfLHjesoXFzDJbh4rvGwJ3L68WBdFURSE5"


export default class GetImageForm extends Component {

  constructor (props) {
    super(props)

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: 1500
}
  }

  componentDidMount(){

    
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?sol=1500&camera=FHAZ&api_key=${api_key}`;

    console.log(imageUrl)

    fetch(imageUrl)
    .then(results => results.json())
    .then(responseData => {
      console.log("responseData: ", responseData)
    })
    .catch((error) => {
      console.log("Error with fetching: ", error)
    })
  }


  render() {

    return (
      <form>
        Get Image Form.js
        <select />
        <select />
        <input />
        <GetImageButton />
      </form>
    )

  }
}
