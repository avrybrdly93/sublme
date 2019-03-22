import React, { Component } from 'react';
import axios from 'axios';
import { Input } from "../components/Form"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      urlOne: "",
      musicTitle: "",
      genre: "",
      urlTwo: "",
      errUploading: false,
      errMsg: ""
    }
  }

  handleChange = (ev) => {
    this.setState({ success: false, url: "" });

  }

  handleTextChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // Perform the upload
  handleUpload = (ev) => {
    let fileOne = this.uploadInput.files[0];
    let fileTwo = this.uploadInputImg.files[0];
    // Split the filename to get the name and type
    let fileParts = this.uploadInput.files[0].name.split('.');
    let imgParts = this.uploadInputImg.files[0].name.split('.');
    let musicName = fileParts[0];
    let musicType = fileParts[1];
    let imgName = imgParts[0];
    let imgType = imgParts[1];
    console.log("Preparing the upload");
    axios.post("/api/music/new", {
      musicName: musicName,
      musicType: musicType,
      imgName: imgName,
      imgType: imgType,
      musicTitle: this.state.musicTitle,
      genre: this.state.genre
    })
      .then(response => {

        if (response.data.success === false) {
          this.setState({ errUploading: true, errMsg: response.data.errMsg })
        }
        else {
          var returnData = response.data.data.returnData;
          var signedRequestOne = returnData.signedRequestOne;
          var urlOne = returnData.urlOne;
          var signedRequestTwo = returnData.signedRequestTwo;
          var urlTwo = returnData.urlTwo;
          this.setState({ urlOne: urlOne, urlTwo: urlTwo });
          console.log("Recieved a signed request for Music " + signedRequestOne);
          console.log("Received a signed request for Cover " + signedRequestTwo);
          // Put the fileType in the headers for the upload
          var optionsOne = {
            headers: {
              'Content-Type': musicType
            }
          };

          var optionsTwo = {
            headers: {
              'Content-Type': imgType
            }
          };

          axios.put(signedRequestOne, fileOne, optionsOne)
            .then(result => {
              axios.put(signedRequestTwo, fileTwo, optionsTwo)
                .then(result => {
                  this.setState({ success: true });
                })
                .catch(error => {
                  alert("ERROR File 2: " + JSON.stringify(error));
                });


            })
            .catch(error => {
              alert("ERROR File 1: " + JSON.stringify(error));
            });
        }
      })
      .catch(error => {
        alert(JSON.stringify(error));
      });
  }


  render() {
    const SuccessMessage = () => (
      <div style={{ padding: 50 }}>
        <h3 style={{ color: 'green' }}>SUCCESSFUL UPLOAD</h3>
        <a href={this.state.urlOne}>Access the Music Here</a>
        <a href={this.state.urlTwo}>Access Cover Art Here</a>
        <br />
      </div>
    )

    const ErrorMessage = () => (
      <div style={{ padding: 50 }}>
        <h3 style={{ color: 'red' }}>{this.state.errMsg}</h3>
        <br />
      </div>
    )

    return (
      <div className="App">
        <center>
          <h1>UPLOAD A FILE</h1>
          {this.state.success ? <SuccessMessage /> : null}
          {this.state.errUploading ? <ErrorMessage /> : null}
          <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file" />
          <input onChange={this.handleChange} ref={(ref) => { this.uploadInputImg = ref }} type="file" />
          <Input
            value={this.state.musicTitle}
            onChange={this.handleTextChange}
            name="musicTitle"
            placeholder="Enter Music Title (required)"
          />
          <Input
            value={this.state.genre}
            onChange={this.handleTextChange}
            name="genre"
            placeholder="Enter Genre (required)"
          />
          <br />
          <button onClick={this.handleUpload}>UPLOAD</button>
        </center>
      </div>
    );
  }
}
export default App;