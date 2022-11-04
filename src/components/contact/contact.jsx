import "./contact.css";
import React, { useState } from 'react';
import Checkbox from "../checkbox/checkbox";


const Contact=()=> {
    const [name, SetName] = useState("")
    const [email, SetEmail] = useState("")
    const [message, SetMessage] = useState("")
    const handleSubmit = (e)=>{
         // alert(name+" we"+email+" we"+message+" all this")
         window.location.href = `mailto:${email}?subject=${name}&body=${message}`
         e.preventDefault();
    }
    return(<div className=" Main-Section">
        <div className="header-section">
            <h1 className="Heading">Contact Me</h1>
            <p className="Support-heading">
                Hi there, contact me to ask about anything you have in mind.
            </p>
        </div>

        <div className='input-container'>
               <div className='form'>
                    <form onSubmit={handleSubmit}>
                         <div className='Name-input'>
                              <input type="text" placeholder="Enter your first name" value={name} onChange={(e) => { SetName(e.target.value) }} name="name" required />
                         </div>
                         <div className='Name-input'>
                              <input type="text" placeholder="Enter your last name" value={name} onChange={(e) => { SetName(e.target.value) }} name="name" required />
                         </div>
                         <div className='Email-container'>
                              <input type="text" placeholder="Email" value={email} onChange={(e) => { SetEmail(e.target.value) }} name="yourname@email.com" required />
                         </div>
                         <div className='message-container'>
                              <textarea type="text" placeholder="Send me a message and I'll reply you as soon as possible..." value={message} onChange={(e) => { SetMessage(e.target.value) }} name="message" required />
                         </div>
                         <div className="checkbox-container">
                         <Checkbox label="You agree to provide your contanct to Okikiola who may contact you." />
                         </div>
                         <button type='submit'>Send message</button>
                    </form>
               </div>
          </div>


</div>

    )
}
export default Contact;