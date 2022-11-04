import "./contact.css";
import React, { useState } from 'react';
import Checkbox from "../checkbox/checkbox";
import Footer from "../footer/footer";


const Contact=()=> {
    const [name, SetName] = useState("")
    const [lastname, SetLastname] = useState("")
    const [email, SetEmail] = useState("")
    const [message, SetMessage] = useState("")
    const handleSubmit = (e)=>{
         alert(name+" we"+email+" we"+message+" all this")
         window.location.href = `https://okikiola-zuri.netlify.app/`
         e.preventDefault();
    }
    return(<div className=" Main-Section">
        <div className="Contact-Section-Content">
            <div className="contact-inner-section">
        <div className="header-section">
            <h1 className="Heading">Contact Me</h1>
            <p className="Support-heading">
                Hi there, contact me to ask about anything you have in mind.
            </p>
        </div>

        

        
               <div className='form'>
               <form onSubmit={handleSubmit}>
               <div className='input-container'>
                    <div className="Name-container">
                         <div className='Name-input'>
                            <p>First Name</p>
                              <input type="text" placeholder="Enter your first name" value={name} onChange={(e) => { SetName(e.target.value) }} name="name" required />
                         </div>
                         <div className='Name-input'>
                            <p>Last Name</p>
                              <input type="text" placeholder="Enter your last name" value={lastname} onChange={(e) => { SetLastname(e.target.value) }} name="name" required />
                         </div>
                         </div>
                         <div className='Email-container'>
                            <div className="Input-label">
                            <p>Email</p>
                              <input type="text" placeholder="yourname@email.com" value={email} onChange={(e) => { SetEmail(e.target.value) }} name="email" required />
                              </div>
                         </div>
                         <div className='message-container'>
                            <div className="message-label">
                                <p>Message</p>
                              <textarea type="text" placeholder="Send me a message and I'll reply you as soon as possible..." value={message} onChange={(e) => { SetMessage(e.target.value) }} name="message" required />
                              </div>
                         </div>
                         <div className="checkbox-container">
                         <Checkbox label="You agree to provide your contact to Okikiola who may contact you." />
                         </div>
                         </div>
                         <button type='submit'>Send message</button>
                    </form>
               </div>
          </div>
          </div>
<Footer/>
</div>

    )
}
export default Contact;