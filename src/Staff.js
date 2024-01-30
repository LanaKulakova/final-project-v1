import { useState } from "react";
import { dataStaff } from "./dataStaff";
import "./App.css";
import logo from "./logo.png";


function Staff() {
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

<div className="logo">
    <img src={logo} width="300px" alt="companylogo" />
</div>


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
<a href="/final-project-v1/contact" > <button className="btnCall"> Contact us</button></a>
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