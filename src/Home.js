import {useState, useRef} from "react";
import './App.css';
import logo from "./logo.png";
import coverphoto from "./coverphoto.jpg";
import song from "./song.mp3";


function Home() {

const [musicPlay, setMusicPlay] = useState(true);
const refAudio = useRef()
const handlePlay =() => {
    setMusicPlay(!musicPlay)
    musicPlay ? refAudio.current.play() : refAudio.current.pause()
}

    return (
    <div className="App">
    
    <div className="logo">
    <img src={logo} width="300px" alt="companylogo" />
    </div>

    <div className="cover">
<img src={coverphoto} width="1366px" alt="coverphoto" />
</div>

<div>
    <h2 className="section">Why us?</h2>
    <ul>
        <li className="ball"> <b>Professional Coaches.</b>The school's core coaches are certified by the Australian Tennis Professional Coaches Association /Tennis Australia. </li>
        <li className="ball"> <b>Internationally recognized.</b>With highly-qualified home-grown and overseas coaches we are able to give our students a broad spectrum of instruction. </li>
        <li className="ball"> <b>Relaxed environment/ Great locations.</b> Convenient and easy to find location at Marrickville Tennis Club and Wicks Park Tennis Centre in Marrickville.</li>
        <li className="ball"> <b>Over 20 years experience.</b> Our School is in its 20th year of teaching adults and children the secrets and marvels of tennis.</li>
    </ul>
</div>


<div>
<h2 className="section">Book trial lesson now!</h2>

<div className="calltoaction">
<a href="/contact" > <button className="btnCall"> Contact us</button></a>
</div>
</div>

<hr></hr>


<div className="treck">
    <p className="treckOfDay">&#127911; Listen TRACK OF THE DAY while browsing: </p>
    <audio src={song} loop="loop" ref={refAudio}></audio>
    <button onClick={handlePlay} className="btnTrack"> {musicPlay ? 'Play' : 'Pause'} </button>
</div>


<div className="down">
    
        <p>&#9883; Copyright 2023 Match Point Sydney Tennis Academy Pty Ltd. All rights reserved.</p>
        <p> Website Designed by Svetlana Kulakova</p>
    
</div>


    </div>


);

}

export default Home;