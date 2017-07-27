import React, { Component } from 'react';
import GetImageButton from './GetImageButton'

const API_KEY = "DvNdeDtfLHjesoXFzDJbh4rvGwJ3L68WBdFURSE5"


export default class GetImageForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "1000"
    }


    this.handleRoverSelection = this.handleRoverSelection.bind(this)
    this.handleCameraSelection = this.handleCameraSelection.bind(this)
    this.handleSolSelection = this.handleSolSelection.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.fetchRoverImage = this.fetchRoverImage.bind(this)

  }

  handleRoverSelection = function (event) {
    this.setState({rover: event.target.value});
  }
  handleCameraSelection = function (event) {
    //alert(event.target.value)
    this.setState({camera: event.target.value});
  }
  handleSolSelection = function (event) {
      this.setState({sol: event.target.value});

  }
  handleSubmit = function (event) {
    if (this.state.sol>=1000 && this.state.sol<=2000) {
      this.fetchRoverImage()
    } else {
      alert("Please enter a number 1000-2000 ")
    }
  }
  fetchRoverImage = function () {
    let cam = this.state.camera
    let rove = this.state.rover
    let num = this.state.sol


    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`

    fetch(imageUrl)
      .then(results => results.json())
      .then(responseData => {console.log("responseData: ", responseData)})
      .catch((error) => {console.log("Error with fetching: ", error)})

  }


  render() {

    return (
      <div className="header">
        <form onSubmit = {this.handleSubmit}>
          <div className="entry">
            <label>Rover: </label>
            <select onChange = {this.handleRoverSelection}>
              <option>Curiosity</option>
              <option>Opportunity</option>
              <option>Spirit</option>
            </select>
          </div>
          <div className="entry">
            <label>Camera Type: </label>
            <select onChange = {this.handleCameraSelection}>
              <option value="FHAZ">FHAZ (Front Hazard)</option>
              <option value="RHAZ">RHAZ (Rear Hazard)</option>
              <option value="NAVCAM">NAVCAM (Navigational)</option>
            </select>
          </div>
          <div className="entry">
            <label>Martian Sol: (1000-2000)</label>
            <input type="text" name="sol" onChange={this.handleSolSelection}></input>
          </div>  
          <div className="entry">
            <GetImageButton />
          </div>
        </form>
        <h3>{this.state.rover}</h3>
      </div>
    )
  }

}
