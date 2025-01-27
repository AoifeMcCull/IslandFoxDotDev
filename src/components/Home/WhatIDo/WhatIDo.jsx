import "./WhatIDo.css";
function WhatIDo() {
    return (
        <div>
            <h2 className="sectionTitle">I Build Websites.</h2>
            <p className="info">I'm an experienced web-dev.</p>
            <p className="info">I use JS, React, Redux, and Axios.</p>
            <div className="logosContainer">
                <img className="jsLogo" src="/js.png" />
                <img className="reactLogo" src="/react.png" />
                <img className="reduxLogo" src="/redux.png" />
                <img className="axiosLogo" src="/axios.png" />
            </div>
            <span className="verticalSpacer" />
            <h2 className="sectionTitle">I build Backends.</h2>
            <p className="info">I have in-industry experience at ITS, Inc.</p>
            <p className="info">
                as a backend dev using Java, Kotlin, Spring, and MySQL.
            </p>
            <div className="logosContainer">
                <img className="leftLogo" src="/java.png" />
                <img className="leftLogo" src="/kotlin.png" />
                <img className="rightLogo" src="/spring.png" />
                <img className="rightLogo" src="/mysql.png" />
            </div>

            <h2 className="sectionTitle">I build Mobile Apps.</h2>
            <p className="info">
                I created the BCX100 Challenge App for Natasha Pehrson,
                available on the App Store and Google Play.
            </p>
            <p className="info">
                as a full stack mobile dev using react-native, Expo, node.js,
                and PostgreSQL.
            </p>
            <div className="logosContainer">
                <img className="leftLogo" src="/reactnative.png" />
                <img className="rightLogo" src="/expo.png" />
            </div>
        </div>
    );
}

export default WhatIDo;
