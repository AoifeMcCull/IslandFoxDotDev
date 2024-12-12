import './WhatILove.css'

function WhatILove(){

    return(
        <div>
            <h2 className='sectionTitle'>I love the Island Fox (Urocyon Littoralis)</h2>
            <p className='info'>The Island Fox is a small canid species only found on California's Channel Islands.</p>
            <p className='info'>After becoming endangered and nearly extinct in the 1990s, it was the subject of the most successful conservation effort in human history. </p>
            <p className='info'>I want to keep these beautiful animals around, and you should too.
            </p>
            <div className='imageContainer'>
                <div className='oneImage'><img src='/islandfox1.png' /></div>
                <div className='oneImage'><img src='/islandfox2.png' /></div>
                <div className='oneImage'><img src='/islandfox3.png' /></div>
            </div>
            <h2 className='sectionTitle'>I love learning and growing.</h2>
            <p className='info'>I am constantly improving myself in every way I can.</p>
            <p className='info'>In my free time, I like to pick up new programming languages (and I'm trying to learn Mandarin!)</p>

            <h2 className='sectionTitle'>I love creativity.</h2>
            <p className='info'>Playing D&D, making digital art, and writing fanfiction are my leisure activities.</p>
            <p className='info'>If I'm not working or learning, I'm dreaming up something new.</p>
        </div>
    )
}

export default WhatILove