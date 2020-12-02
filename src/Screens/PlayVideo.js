import '../App.css';
import '../CustomCheckBox.css';
import { Nav, SideDrawer, Button, TranscriptRow, PeopleCard } from '../Components'
import { useState } from 'react';
import image from '../img.jpg'

function PlayVideo() {
  const [shown, setShown] = useState(false)
  return (
    <div className="AppVid">
      <SideDrawer shown={shown} />
      <div className="AppVidSub">
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', backgroundColor: 'rgb(219, 219, 219)' }}>
          <div style={{ flex: 1, flexDirection: 'column', paddingRight: 10, paddingLeft: 10, height: 100 + "%" }}>
            <Nav src={image} hideSearch={true} rightIcon={
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <i className="fa fa-bars hover" onClick={() => setShown(!shown)} style={{ fontSize: 2 + 'em', margin: 'auto', marginRight: 10, color: '#00c452' }}></i>
                <div style={{ marginLeft: 20 }}>
                  <h1 style={{ margin: 0 }} className="smVidTitle">{!shown ? 'Case ID 5123132 - Video 1' : "Case"}</h1>
                  <h6 style={{ margin: 0, color: 'gray' }}>{!shown ? 'New . Nov 26,2020' : 'New'}</h6>
                </div>
              </div>
            } />


            <div style={{ width: 90 + "%", height: '400px', background: '#00c452', margin: 'auto', marginTop: 30 }}>

            </div>
            <div className="vidBtns" style={{ width: 90 + "%", margin: 'auto', display: 'flex', flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
              <Button title="Process Video" className="clicked" green></Button>
              <div>
                <Button style={{ margin: 10 }} title="Last Frame"></Button>
                <Button style={{ margin: 10 }} title="Next Frame"></Button>
              </div>
            </div>

            <div style={{ width: 90 + '%', margin: 'auto', display: 'flex', flexDirection: 'column', backgroundColor: 'white', marginTop: 30, padding: 10,marginBottom:10 }}>
              <h1 style={{ fontWeight: 'bolder', marginTop: 0 }}>
                Transcript
            </h1>
              <div style={{ margin: 20, marginTop: 0,display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(200,200,200,0.5)' }}>
                <TranscriptRow message="Hello sir" name="Someone" />
                <TranscriptRow message="Hello sir" name="Someone" />
                <TranscriptRow message="Hello sir" green name="Someone" />
                <TranscriptRow message="Hello sir" name="Someone" />
                <TranscriptRow message="Hello sir" green name="Someone" />
              </div>
            </div>



          </div>
        </div>
        <div style={{ flex: 0.3, background: 'white', flexDirection: 'column' }}>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 90 + "%", margin: 'auto' }}>
            <h2>People</h2>

            <select className="customSelect">
              <option value="0">Select Action</option>
              <option value="1">Redact Face</option>
              <option value="2">Redact Voice</option>
              <option value="3">Modulate Voice</option>
            </select>
          </div>



          <PeopleCard src={image} name="Agent 201" frames="305 frames" visible />
          <PeopleCard src={image} name="Agent 201" frames="305 frames" />
          <PeopleCard src={image} name="Agent 201" frames="305 frames" />
          <PeopleCard src={image} name="Agent 201" frames="305 frames" />

        </div>
      </div>
    </div>
  );
}

export default PlayVideo;