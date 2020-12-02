import React from 'react'
import { Link } from "react-router-dom";
import image from "./img.jpg"

export function ItemCard(props) {
    let style = {
        container: {
            overflow: 'hidden',
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'row',
            margin: 10,
            boxShadow: '0px 4px 5px silver',
        },
        img: {
            width: 100 + "%",
            height: 100 + "%",
            objectFit: 'cover',
        },
        imgCon: {
            width: 90,
            height: 90,
            minWidth:90,
            minHeight:90,
            borderRadius: 10,
            overflow: 'hidden',
            position: 'relative'
        },
        imgTxt: {
            position: 'absolute',
            bottom: 0,
            margin: 0,
            padding: 0,
            backgroundColor: 'rgba(0, 196, 82,0.8)',
            width: 100 + "%",
            fontSize: 0.9 + 'em',
            color: 'white',
            textAlign: 'center',
            fontWeight: 500
        },
        textCon: {
            marginLeft: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        title: {
            fontWeight: 'bold',
            fontSize: 1.2 + 'em',
            margin: 0,
            marginBottom: 5
        },
        description: {
            fontSize: 0.8 + 'em',
            margin: 0,
        },
        linkStyle:{
            display:'flex',
            color:'black',
            textDecoration:'none',
            width:100+"% !important"
        }
    }
    return (
        <Link to={props.to} style={{...style.linkStyle,...props.linkStyle}}>
        <div style={{ ...style.container, ...props.containerStyle }} className={props.containerClassName}>
            <div style={style.imgCon}>
                <img src={props.src} style={style.img} />
                <h1 style={style.imgTxt}>{props.size}</h1>
            </div>
            <div style={style.textCon}>
                <h4 style={style.title}>{props.title}</h4>
                <p style={style.description}>{props.description}</p>
            </div>
        </div>
        </Link>
    );
}


export function CaseCard(props) {
    let style = {
        container: {
            display: 'flex',
            margin: 10,
            padding: 5,
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            position: 'relative',
            boxShadow: '0px 4px 5px silver',
        },
        icon: {
            margin: 5,
            color: '#00c452',
            fontSize: 2 + 'em'
        },
        title: {
            fontWeight: 'bold',
            fontSize: 1 + 'em',
            margin: 0,
        },
        description: {
            fontSize: 0.8 + 'em',
            margin: 0,
            fontWeight: 500,
            color: 'gray'
        },
        textCon: {
            marginLeft: 5
        },
        moreIcon: {
            position: 'absolute',
            right: 0,
            marginRight: 10,
            fontSize: 1.5 + 'em',
            top: 50 + "%",
            transform: "translateY(-50%)",
        },
    }
    return (
        <div style={{ ...style.container, ...props.containerStyle }}>
            <i style={style.icon} className="fa fa-folder"></i>
            <div style={style.textCon}>
                <h3 style={style.title}>{props.title}</h3>
                <h3 style={style.description}>{props.videos} Videos - {props.private ? "Private" : null} {props.shared ? "Shared" : null}</h3>
            </div>
            <i style={style.moreIcon} className="fa fa-ellipsis-v hover"></i>
        </div>
    )
}

export function VideoCard(props) {
    let style = {
        container: {
            display: 'flex',
            margin: 10,
            padding: 7,
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            alignItems: 'center',
            position: 'relative',
            boxShadow: '0px 4px 5px silver',
        },
        moreIcon: {
            position: 'absolute',
            right: 0,
            marginRight: 10,
            fontSize: 1.5 + 'em',
            top: 50 + "%",
            transform: "translateY(-50%)",
        },
        description: {
            flex: 1,
            fontSize: 0.8 + 'em',
            fontWeight: 500,
            color: '#000',
        },
        type: {
            backgroundColor: "#00c452",
            borderRadius: 5,
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff'
        },
        typeNameCon: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1
        }
    }
    return (
        <div style={style.container}>
            <div style={style.typeNameCon}>
                <div style={style.type}>
                    {props.type}
                </div>
                <h1 style={{ ...style.description, marginLeft: 10, flex: 0 }}>{props.name}</h1>
            </div>
            <h1 style={style.description}>{props.size}</h1>
            <h1 style={style.description}>{props.status}</h1>
            <h1 style={style.description}>{props.time}</h1>

            <i style={style.moreIcon} className="fa fa-ellipsis-v hover"></i>
        </div>
    )
}

export function Nav(props) {
    let style = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
        },
        searchIcon: {
            fontSize: 1.3 + 'em',
        },
        inputCon: {
            display: 'flex',
            flex: 4,
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        },
        input: {
            borderWidth: 0,
            height: 100 + "%",
            width: 100 + "%",
            marginLeft: 10,
            fontSize: 0.9 + "em"
        },
        profileCon: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        bellIcon: {
            color: "#00c452",
            fontSize: 1.5 + 'em'
        },
        bellCon: {
            position: 'relative'
        },
        bellNotification: {
            height: 8,
            width: 8,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: '#fff',
            borderStyle: 'solid',
            position: 'absolute',
            top: 2,
            right: 0,
            backgroundColor: 'red',
        },
        profilePic: {
            width: 40,
            height: 40,
            borderRadius: 100,
            marginLeft: 10
        },
        select: {
            marginLeft: 10,
            borderRadius: 5,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: 'gray',
        },
    }
    return (
        <div style={style.container}>
            {props.rightIcon}
            {props.hideSearch ? null : <div style={style.inputCon} className="smSearchCon">
                <i style={style.searchIcon} className="fa fa-search"></i>
                <input style={style.input} placeholder="Search Files" />
            </div>}

            <div style={{ flex: 0.3 }} className="navDividerDiv"></div>
            <div style={style.profileCon}>

                <div style={style.bellCon} className="hover">
                    <i style={style.bellIcon} className="fa fa-bell"></i>
                    <div style={style.bellNotification}></div>
                </div>

                <img style={style.profilePic} className="hover" src={props.src} />

                <select style={style.select}>
                    <option value="0">Tom Avery</option>
                    <option value="1">Option</option>
                    <option value="2">Option</option>
                </select>

            </div>
        </div>
    );
}


export function CategoryTextRow(props) {
    let style = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            alignItems: 'center'
        },
    }
    return (
        <div style={style.container}>
            <h2 style={{ margin: 0 }}>{props.title}</h2>
            <h6 style={{ margin: 0 }}>{props.rightTxt}</h6>
        </div>
    );
}

export function SideDrawer(props) {
    let style = {
        container: {
            backgroundColor: '#000',
            flexDirection: 'column',
            padding: 40,
            minHeight:100+"vh",
            height: 100 + '%',
            margin:0
        },
    }
    return (
        <div style={style.container} className={props.shown ? "show dwrNav" : "dwrNav hide"}>
            <img src={image} style={{ height: 50 }}></img>
            <Link to="/" className="dwrLink"><i className="fa fa-th-large dwrNavIcon" />Dashboard</Link>
            <Link to="/" className="dwrLink"><i className="fa fa-file dwrNavIcon" />My Videos</Link>
            <Link to="/" className="dwrLink"><i className="fa fa-history dwrNavIcon" />Recent Videos</Link>
            <Link to="/video" className="dwrLink"><i className="fa fa-users dwrNavIcon" />Shared With Me</Link>
            <Link to="/video" className="dwrLink"><i className="fa fa-trash dwrNavIcon" />Deleted</Link>
            <Link to="/video" className="dwrLink"><i className="fa fa-sign-out dwrNavIcon" />Logout</Link>
        </div>
    );
}


export function Button(props) {
    let style = {
        btn: {
            padding: 10,
            borderWidth: props.green ? 0 : 1,
            borderColor: "#000",
            borderStyle: 'solid',
            borderRadius: 10,
            boxShadow: '0px 4px 5px silver',
            fontSize: 'large',
            color: props.green ? '#fff' : '#000',
            backgroundColor: props.green ? '#00c452' : '#fff',
        }
    }
    return (
        <button style={{ ...style.btn, ...props.style }} className={props.className ? props.className : "hover"} onClick={props.onClick}>{props.title}</button>
    );
}

export function TranscriptRow(props) {
    let style = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '5px 10px',
        },
        name: {
            fontSize: 0.9 + 'em',
            color: props.green ? '#00c452' : '#000',
            margin: 0,
            fontWeight: 'normal'
        },
        message: {
            fontSize: 0.9 + 'em',
            color: props.green ? '#00c452' : '#000',
            margin: 0,
            marginLeft: 10,
            fontWeight: 'normal'
        }
    }

    return (
        <div style={{ ...style.container, ...props.containerStyle }}>
            <h5 style={{ ...style.name, ...props.nameStyle }}>{props.name}:</h5>
            <h5 style={{ ...style.message, ...props.messageStyle }}>{props.message}</h5>
        </div>
    );
}

export function PeopleCard(props) {
    let style = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            margin: 10,
        },
        img: {
            width: 90,
            height: 90,
            borderRadius: 10,
            overflow: 'hidden',
            objectFit: 'cover',
            marginLeft: 10
        },
        textCon: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 10,
            padding:5
        },
        text:{
            fontSize:1+'em',
            fontWeight:'normal',
            margin:0,
        },
        greenTxt:{
            fontSize:0.8+'em',
            fontWeight:'normal',
            margin:0,
            color:'#00c452'
        },
        redTxt:{
            fontSize:0.8+'em',
            fontWeight:'normal',
            margin:0,
            color:'red'
        }
    }
    return (
        <div style={style.container}>
            <label class="checkboxContainer">
                    <input type="checkbox" />
                    <span class="checkmark" />
            </label>
            <img src={props.src} style={style.img} />
            <div style={style.textCon}>
                <h3 style={style.text}>{props.name}</h3>
                <h3 style={style.text}>{props.frames}</h3>
                <div style={{display:"flex",flexDirection:'row',alignItems:'center'}}>
                <h3 style={props.visible ? style.greenTxt : style.redTxt}>{props.visible ? "Visible" : "Not Visible"}</h3>
                <i style={{marginLeft:5,fontSize:'larger'}} className="fa fa-volume-up"></i>
                </div>
            </div>
        </div>
    );
}