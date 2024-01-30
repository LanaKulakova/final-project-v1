import { useState, useEffect, useRef } from "react";
import { dataStaff } from "./dataStaff";
import "./App.css";
import ball from "./ball.png";
import gsap from "gsap";
import logonew from "./logonew.png";
import {Route, Routes, useNavigate} from 'react-router-dom';
import Contact from "./Contact";

function Staff() {

    let ballItem = useRef(null);
    useEffect( () => {
        gsap.to(
            ballItem,
                        {
                rotation: 360,
                y: +3,
                x: +700,
                duration: 3,
                delay: .2,
                }
        )
    }, [])

    const navigate = useNavigate();
    const navigateToContacts = () => {
        navigate('/contact');
    }; 

const [coach, setCoach] = useState(0);
const {id, image, name, position, description} = dataStaff[coach]

const previousCoach = () => {
    setCoach((coach => {
        coach --;
        if (coach<0) {
            return dataStaff.length-1;
        }
        return coach;
    }))
    }
    
    const nextCoach = () => {
        setCoach((coach=> {
            coach++;
            if (coach>dataStaff.length-1) {
                coach=0;
            }
            return coach;
        }))
    }
    

return  <div>
<hr></hr>
<div className="bounceBall">
    <img ref = {element => {ballItem=element}} src={ball} width="30px" alt="ball"  />
    </div>

    <div className="logo">
    <img src={logonew} width="300px" alt="companylogo" />
    </div>  
<hr></hr>    

<div>
    <h2 className="section"> Introducing our coaches </h2>
</div>
<div className="containerAbout">
<img src={image} width="300px" alt="pics" />
</div>
<div className="containerAbout">
    <h3> #{id} - {name} </h3>
</div>
<div className="containerAbout">
    <h3> {position} </h3>
</div>
<div className="containerAbout">
    <p className="parDescriptionStaff"> {description} </p>
</div>

<div className="btn">
<button className="buttonstyle" onClick={previousCoach} > PREVIOUS </button>
<button className="buttonstyle" onClick={nextCoach}>NEXT</button>
</div>

<hr></hr>
<div>
<h2 className="section">Book trial lesson now!</h2>

<div className="calltoaction">
<button className="btnCall" onClick={navigateToContacts}> Contact us</button>
<Routes>
        <Route path="/contacts" element={<Contact />} />
                </Routes>
</div>
</div>

<hr></hr>
<div className="down">
    
        <p>&#9883; Copyright 2023 Match Point Sydney Tennis Academy Pty Ltd. All rights reserved.</p>
        <p> Website Designed by Svetlana Kulakova</p>
</div>
</div>
}
    
    export default Staff;