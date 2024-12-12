import './WhatIDo.css'
function WhatIDo(){
    return(
        <div>
            <h2 className='sectionTitle'>I Build Websites.</h2>
                <p className= 'info'>I'm an experienced web-dev.</p>
                <p className= 'info'>I use JS, React, Redux, and Axios.</p>
                <div className='logosContainer'>
                    <img className='jsLogo' src='public\js.png' />
                    <img className='reactLogo' src='public\react.png' />
                    <img className='reduxLogo' src='public\redux.png' />
                    <img className='axiosLogo' src='public\axios.png' />
                </div>
                <span className='verticalSpacer' />
                <h2 className='sectionTitle'>I build Backends.</h2>
                <p className='info'>I have in-industry experience at ITS, Inc.</p>
                <p className='info'>as a backend dev using Java, Kotlin, Spring, and MySQL.</p>
                <div className='logosContainer'>
                    <img className='leftLogo' src='public\java.png' />
                    <img className='leftLogo' src='public\kotlin.png' />
                    <img className='rightLogo' src='public\spring.png' />
                    <img className='rightLogo' src='public\mysql.png' />
                </div>

                <h2 className='sectionTitle'>I build Mobile Apps.</h2>
                <p className='info'>I'm building the Body Confidence 100 app for iOS and Android for my client.</p>
        </div>
    )
}

export default WhatIDo