import React from 'react'

const ContactForm = () => {
    return (
        <form action="https://submit-form.com/0FYUvFS7">
            <label >Name</label>
            <input type="text" id="name" name="name" placeholder="Name" required={true} />
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required={true} />
            <label>Message</label>
            <textarea
                id="message"
                name="message"
                placeholder="Message"
                required={true}
            ></textarea>
            <button type="submit">Send</button>
        </form>
    )
}

export default ContactForm