import { useState, useEffect, useRef } from "react";
import { dataAbout } from "./dataAbout";
import "./App.css";
import logonew from "./logonew.png";
import founder from "./founder.jpg";
import { Accordion } from "./Accordion/Accordion";
import {Route, Routes, useNavigate} from 'react-router-dom';
import Contact from "./Contact";
import gsap from "gsap";
import ball from "./ball.png";



function About() 
{
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

const [pic, setPic] = useState(dataAbout);

const [showText, setShowText] = useState(false);


const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
}

    return ( <div>
<hr></hr>

<div className="bounceBall">
    <img ref = {element => {ballItem=element}} src={ball} width="30px" alt="ball"  />
    </div>

    <div className="logo">
    <img src={logonew} width="300px" alt="companylogo" />
    </div>  
<hr></hr>    

<div>
    <h2 className="section"> About us </h2>
</div>

<div className="founder">
<div className="parAbout">
    <p>
    Match Point Tennis Academy was set up in 2018 to provide tennis education for
    a wide variety of ages and ability. Our programme is designed to provide an 
    opportunity for players to develop their technical     and tactical ability, 
    whilst improving their fitness and health. </p>
    <p>I was keen to set up an academy that provided an experience where learning 
    was placed alongside fun and enjoyment. In order to achieve this, I have 
    capped the group sizes to 6 players to ensure that everyone playing at the 
    academy can see a progression in their tennis ability throughout the term. 
    I also wanted to ensure that there was never a situation in my tennis academy
    where players are lined up waiting to hit a ball, as excellence comes with 
    repetition and practice.
    </p>
    <p> <b>Anna Smith, Founder</b></p>
</div>
<div>
    <img src={founder} alt="founder" width="350px"/>
</div>
</div>

<div>
<h2 className="section"> We can offer: </h2>
</div>

{pic.map((item => {
const {id, description, image, showMore} = item;

return (
<div key={id}>

<div className="containerAbout">
<img src={image} width="700px" alt="pics" />
</div>

<div className="containerAbout">
    <p> #{id} - { showMore ? description : description.substring(0, 80) + "...."}  <button className="showMore" onClick = { () => showTextClick(item)} > {showMore ? "Show less" : "Show More"} </button>   </p>
</div>
</div> 

)

}))}

<div className="hide">
    <button className="showMore" onClick={()=> setPic([])} >Hide All</button>
    </div>

<hr></hr>
<div>
<h2 className="section"> Our programms </h2>
</div>

<Accordion />

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
        
    
    )
    }
    export default About;