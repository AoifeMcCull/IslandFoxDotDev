import './WhatImLearning.css'

function WhatImLearning(){
    return(
    <div>
        <h2 className='sectionTitle'>I'm expanding my skills to mobile development.</h2>
        <p className='info'>I'm teaching myself React-native and Flutter so that I can build the mobile apps of the future.</p>
        <div className='logoContainer'>
            <img src='/reactnative.png' />
            <img src='/flutter.png' />
        </div>

        <h2 className='sectionTitle'>I'm learning Mandarin.</h2>
        <p className='info'>My goal is to reach HSK 4 (intermediate knowledge) by March 2024.</p>

        <h2 className='sectionTitle'>I'm studying for the AWS Software Development Engineer certification.</h2>
        <p className='info'>I'll be able to help you build incredible applications leveraging AWS.</p>
    </div>
    )
}

export default WhatImLearning