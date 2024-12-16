import './Contact.css'

function Contact(){
    return(
        <div>
            <h2 className='centered'>Contact me!</h2>
        <div className='contactsContainer'>
            <div className='contactContainer'>
                <div className="contact">
                    <a href='mailto:aoife@islandfox.dev'>
                    <h3>Email me!</h3>
                    <p>aoife@islandfox.dev</p>
                    </a>
                </div>
                <div className='contact-under' />
            </div>
            <div className='contactContainer'>
                <div className="contact">
                    <a href='https://www.linkedin.com/in/jamiefullstack/'>
                    <h3>Link with me on LinkedIn!</h3>
                    <p>https://www.linkedin.com/in/jamiefullstack/</p>
                    </a>
                </div>
                <div className='contact-under' />
            </div>
            <div className='contactContainer'>
                <div className='contact'>
                    <a href='https://github.com/AoifeMcCull'>
                    <h3>Follow me on GitHub!</h3>
                    <p>github.com/AoifeMcCull</p>
                    </a>
                </div>
                <div className='contact-front' />
                <div className='contact-side' />
            </div>

            </div>
        </div>
        
    )
}

export default Contact