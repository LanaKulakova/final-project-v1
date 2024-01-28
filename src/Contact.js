import "./App.css";
import logo from "./logo.png";


function Contact() {
    return <div>
<div className="logo">
    <img src={logo} width="300px" alt="companylogo" />
    </div>
<div>
    <h2 className="sectionContact"> Contact details </h2>
</div>

<div className="parcontact">
<p>&#128381; 02 9569 1669</p>

<p>&#128386; PO Box 214<br></br> 
Marrickville NSW<br></br>
1455
</p>
</div>

<div className="parcontact">
<iframe title="Our map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.1919031320863!2d151.16152637481267!3d-33.910460221216326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b0678dbcf463%3A0xf017d68f9f151c0!2sWicks%20Park!5e0!3m2!1sen!2sru!4v1706384955417!5m2!1sen!2sru" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" alt="map"></iframe>
</div>


<hr></hr>
<div className="down">
    
        <p>&#9883; Copyright 2023 Match Point Sydney Tennis Academy Pty Ltd. All rights reserved.</p>
        <p> Website Designed by Svetlana Kulakova</p>
    
</div>


    </div>


       
    
    
    }
    
    export default Contact;