import React from 'react'
import "./style.scss"

function ContactUs() {
    return (
        <section id='contact'>
            <div className="contactus">
            <div className="contactus_head">
                    <i className="fa-solid fa-drumstick-bite"></i>
                    <div className='contactus_menu'>
                        <p></p> <h1>Contact US</h1><p></p>
                    </div>
                </div>
                <div className="contactus_bottom">
                <input type="text" name="" id="" placeholder='name' className='name' />
                   <input type="text" name="" id=""  placeholder='email' className='name'/>
                   <textarea name="" id="" cols="30" rows="10" placeholder='message' className='text'></textarea>
                </div>
            </div>
            
        </section>
    )
}

export default ContactUs