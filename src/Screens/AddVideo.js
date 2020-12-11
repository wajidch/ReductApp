import React, { Component } from 'react';
import '../App.css';
import { Nav, SideDrawer } from '../Components'
import image from '../img.jpg'
class VideoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: true,
      videoData: []
    };
    this.setShown = this.setShown.bind(this);
  }
  setShown(value) {
    this.setState({ shown: value })
  }
  componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("userid", "A3937168");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("https://aws-dev.xcellence.tech/vr_api/redact/get_video_list", requestOptions)
      .then(response => response.text())
      .then(result => {
        let data = JSON.parse(result)
        this.setState({ videoData: data.message })
      })
      .catch(error => console.log('error', error));
  }
  render() {
    console.log(this.state.videoData)
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
            <input type="text" placeholder="Click to select video for recognition" class="videoInput" />
            <button class="uploadBtn" > UPLOAD TEST FILE FOR RECOGHITION </button>
            <button class="resultBtn"> DOWNLOAD RESULT AS JSON </button>
          </form>
          <br />
        </div>
    </div>
    );
  }
}

export default VideoScreen;