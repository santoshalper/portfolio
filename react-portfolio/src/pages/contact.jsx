import { useState } from 'react';


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === 'name') {
          setName(inputValue);
        } else if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'message') {
          setMessage(inputValue);
        }
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!name){
            setError('Name can\'t be empty');
            return;
        } else if(!email){
            setError('Email cant\' be empty');
            return;
        } else if(!message){
            setError('Message can\'t be empty');
            return;
        }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(email).toLowerCase())){
            setError('Email format incorrect');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
        setError('')
        alert(`Message Submitted`);
      }

    return (
        <>
            <h2>Contact</h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <label for="name">Name:          </label><br/>
                <input  
                 value={name}
                 name="name"
                 onChange={handleInputChange}
                 type="text"
                 placeholder="Your Name"
                 id="name" /><br/>
                <label for="email">Email Address: </label><br/>
                <input
                 value={email}
                 onChange={handleInputChange}
                 name="email"
                 type="text"
                 placeholder="Your Email Address"
                 id="email" /><br/>
                <label for="message">Message: </label><br/>
                <textarea
                 rows="8"
                 cols="25"
                 name="message"
                 value={message}
                 onChange={handleInputChange}
                 placeholder="Your Message"
                 id="message" /><br/>
                <button type="submit">Send Message</button>
            </form>
            {error && (
                <div>
                    <p className='error-text'>{error}</p>
                </div>
            )}
        </>
    )
}