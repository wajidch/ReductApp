import React, { Component } from 'react';
import '../App.css';
import { Nav, SideDrawer } from '../Components'
import image from '../img.jpg'
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> 09cc3c677718d047b320c0d8c5d7fde572751a68
class VideoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD
      shown: true,
=======
      shown: false,
>>>>>>> 09cc3c677718d047b320c0d8c5d7fde572751a68
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
<<<<<<< HEAD
=======
    let recentVideos = [
      {
        src: image,
        title: "654321.mp4",
        description: "5 hours ago",
        size: "3 MB",
        to: "/video"
      },
      {
        src: image,
        title: "123456.mp4",
        description: "10 hours ago",
        size: "10 MB",
        to: "/video"
      },
      {
        src: image,
        title: "4145.mp4",
        description: "7 hours ago",
        size: "4 MB",
        to: "/video"
      },
      {
        src: image,
        title: "654321.mp4",
        description: "5 hours ago",
        size: "3 MB",
        to: "/video"
      },
      {
        src: image,
        title: "123456.mp4",
        description: "10 hours ago",
        size: "10 MB",
        to: "/video"
      },
      {
        src: image,
        title: "4145.mp4",
        description: "7 hours ago",
        size: "4 MB",
        to: "/video"
      },
    ]

    let Cases = [
      {
        title: "ID 2002",
        videos: 10,
        private: true,
      },
      {
        title: "ID 23",
        videos: 13,
        shared: true
      },
      {
        title: "ID 2402",
        videos: 5,
        private: true
      },
      {
        title: "ID 2002",
        videos: 10,
        private: true,
      },
      {
        title: "ID 23",
        videos: 13,
        shared: true
      },
      {
        title: "ID 2402",
        videos: 5,
        private: true
      },
    ]

    let myVideos = [
      {
        type: "MP4",
        name: "313124-1",
        size: "19 MB",
        status: "In Progress",
        time: "Today"
      },
      {
        type: "MP4",
        name: "313124-1",
        size: "19 MB",
        status: "In Progress",
        time: "Today"
      }, {
        type: "MP4",
        name: "313124-1",
        size: "19 MB",
        status: "In Progress",
        time: "Today"
      }, {
        type: "MP4",
        name: "313124-1",
        size: "19 MB",
        status: "In Progress",
        time: "Today"
      }, {
        type: "MP4",
        name: "313124-1",
        size: "19 MB",
        status: "In Progress",
        time: "Today"
      },
    ]


    

>>>>>>> 09cc3c677718d047b320c0d8c5d7fde572751a68
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