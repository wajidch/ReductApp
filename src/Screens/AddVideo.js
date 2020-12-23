import React, { Component } from 'react';
import '../App.css';
import { Nav, SideDrawer } from '../Components'
import image from '../img.jpg'
import axios from 'axios';
let filename;
class VideoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file:''
    };
    this.setShown = this.setShown.bind(this);
    
  }
  setShown(value) {
    this.setState({ shown: value })
  }
  componentDidMount() {
   
  }
  onChangeFile(event) {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    filename=file.name
    console.log(filename);

    var myHeaders = new Headers();
     myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const data = new FormData();
    data.append("userid", "48886ACD");
    data.append("file",file);
    // urlencoded.append();
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow'
    };

    fetch("https://prod2.authenticity.ai/vr_api/redact/video_redact", requestOptions)
      .then(response => response.text())
      .then(result => {
        let data = JSON.parse(result)
        console.log("data",data)
       
      })
      .catch(error => console.log('error', error));

}
onDownloadFile(){
 

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("userid", "48886ACD");
  urlencoded.append("filename", "IMG_8222_redact.mp4");
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch("https://prod2.authenticity.ai/vr_api/redact/download_result", requestOptions)
    .then(response => response.text())
    .then(result => {
      let data = JSON.parse(result)
      console.log("data",data)
     
    })
    .catch(error => console.log('error', error));
 
}
  render() {
    return (
      <div className="App">
        <SideDrawer shown={this.state.shown} />
        <div style={{ flex: 1, flexDirection: 'column', paddingRight: 10, paddingLeft: 10, height: 100 + "%", backgroundColor: 'rgb(219, 219, 219)' }}>
          <Nav src={image} rightIcon={
            <i className="fa fa-bars hover" onClick={() => this.setShown(!this.state.shown)} style={{ fontSize: 2 + 'em', margin: 'auto', marginRight: 10, color: '#00c452' }}></i>
          } />
          {/* Recent */}
          <br />
          <h1>  Upload Video </h1>
          <p> Test File </p>
          <form class="addVideoForm"> 
            <input type="file" id="file" onChange={this.onChangeFile.bind(this)} placeholder="Click to select video for recognition" className="videoInput" />
            {/* <button className="uploadBtn" > UPLOAD TEST FILE FOR RECOGHITION </button> */}
            <button type="button" className="resultBtn" onClick={this.onDownloadFile.bind()}> DOWNLOAD RESULT AS JSON </button>
          </form>
          <br />
        </div>
    </div>
    );
  }
}

export default VideoScreen;