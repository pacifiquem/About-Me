import React from 'react';
import './styles/style.css';

const AboutMe = () => {
    
    const Email = "pacifiquemurangwa001@gmail.com";
    const emailHandler = () => {
        navigator.clipboard.writeText(Email);
    }
    return (
        <>
            <div className='body-container'>
                <div>
                    <p id='name'>HI! I'M PACIFIQUE MURANGWA</p>
                    <div className="description">
                        <p>I'm software engineer who've exprience in <span>Web-development</span></p>
                        <p> and development of <span>Desktop</span> and <span>Mobile applications.</span> also,</p>
                        <p>I'm really Interested in <span>problem solving</span>,and <span>virtual reality.</span></p>
                        <p></p>
                    </div>
                    <div className="ending">
                        <p>I'm always open to learning about new opportunities. Get in </p>
                        <p>touch with me by using an <span onClick={emailHandler} id="email">email</span>. I'm delighted to make your </p>
                        <p>acquaintance.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;