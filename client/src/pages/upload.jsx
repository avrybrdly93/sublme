import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import Dropzone from "../components/Dropzone/Dropzone";
import UploadForm from "../components/UploadForm/UploadForm";
import Typography from "@material-ui/core/Typography";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      success: false,
      urlOne: "",
      musicTitle: "",
      genre: "",
      urlTwo: "",
      errUploading: false,
      errMsg: "",
      currentStep: 1,
      email: "",
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    if (Cookies.get("username") === undefined) {
      this.setState({ loggedIn: false });
    } else {
      this.setState({ loggedIn: true });
    }
  }

  handleChange = ev => {
    this.setState({ success: false, url: "" });
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  };

  handleTextChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //Handles submit
  handleSubmit = event => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Password: ${password}`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}>
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}>
          Next
        </button>
      );
    }
    return null;
  }

  // Perform the upload
  handleUpload = ev => {
    ev.preventDefault();
    let fileOne = this.uploadInput.files[0];
    let fileTwo = this.uploadInputImg.files[0];
    // Split the filename to get the name and type
    let fileParts = this.uploadInput.files[0].name.split(".");
    let imgParts = this.uploadInputImg.files[0].name.split(".");
    let musicName = fileParts[0];
    let musicType = fileParts[1];
    let imgName = imgParts[0];
    let imgType = imgParts[1];
    let imgSize = this.uploadInputImg.files[0].size / 1024 / 1024;
    //console.log("Preparing the upload");
    axios
      .post("/api/music/new", {
        musicName: musicName,
        musicType: musicType,
        imgName: imgName,
        imgType: imgType,
        imgSize: imgSize,
        musicTitle: this.state.musicTitle,
        genre: this.state.genre
      })
      .then(response => {
        if (response.data.success === false) {
          this.setState({ errUploading: true, errMsg: response.data.errMsg });
        } else {
          var returnData = response.data.data.returnData;
          var signedRequestOne = returnData.signedRequestOne;
          var urlOne = returnData.urlOne;
          var signedRequestTwo = returnData.signedRequestTwo;
          var urlTwo = returnData.urlTwo;
          this.setState({ urlOne: urlOne, urlTwo: urlTwo });
          console.log(
            "Recieved a signed request for Music " + signedRequestOne
          );
          console.log(
            "Received a signed request for Cover " + signedRequestTwo
          );
          // Put the fileType in the headers for the upload
          var optionsOne = {
            headers: {
              "Content-Type": musicType
            }
          };

          var optionsTwo = {
            headers: {
              "Content-Type": imgType
            }
          };

          axios
            .put(signedRequestOne, fileOne, optionsOne)
            .then(result => {
              axios
                .put(signedRequestTwo, fileTwo, optionsTwo)
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
  };

  renderRedirect = () => {
    if (this.state.loggedIn) {
      return null;
    } else {
      return <Redirect to="/dashboard" />;
    }
  };

  render() {
    const SuccessMessage = () => (
      <div style={{ padding: 50 }}>
        <h3 style={{ color: "green" }}>SUCCESSFUL UPLOAD</h3>
        <a href={this.state.urlOne}>Access the Music Here</a>
        <br />
        <a href={this.state.urlTwo}>Access Cover Art Here</a>
        <br />
        <a href="/dashboard">Dashboard</a>
        <br />
      </div>
    );

    const ErrorMessage = () => (
      <div style={{ padding: 50 }}>
        <h3 style={{ color: "red" }}>{this.state.errMsg}</h3>
        <br />
      </div>
    );
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3" />
          <div className="col-6">
            {this.state.success ? <SuccessMessage /> : null}
            {this.state.errUploading ? <ErrorMessage /> : null}
            {this.state.success ? null : (
              <React.Fragment>
                <p>Step {this.state.currentStep} </p>

                <form onSubmit={this.handleSubmit}>
                  {/* 
          render the form steps and pass required props in
        */}
                  <Step1
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    email={this.state.email}
                  />
                  <Step2
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    username={this.state.username}
                  />
                  <Step3
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    password={this.state.password}
                  />
                  <br />
                  {this.previousButton()}
                  {this.nextButton()}
                </form>
                <br />
              </React.Fragment>
            )}
          </div>
          <div className="col-3" />
        </div>
      </div>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <React.Fragment>
      <Typography variant="h4" style={{ color: "white" }} gutterBottom>
        Upload audio...
      </Typography>
      <Dropzone
        fileType={["audio/*"]}
        maxSize="70000000"
        text="Drag n' drop audio here or click"
      />
    </React.Fragment>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <React.Fragment>
      <Typography variant="h4" style={{ color: "white" }}>
        Upload artwork...
      </Typography>
      <Typography variant="caption" style={{ color: "white" }} gutterBottom>
        *Please upload minimum 500x500 dimensions for best quality
      </Typography>
      <Dropzone
        fileType={["image/*"]}
        maxSize="5000000"
        text="Drag n' drop image here or click"
      />
    </React.Fragment>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <Typography variant="h4" style={{ color: "white" }} gutterBottom>
        Add details & upload your track...
      </Typography>
      <UploadForm />
    </React.Fragment>
  );
}

export default Upload;
