import './Resume.css'
import pdf from '../../assets/Aoife McCullough resume 2024.pdf';
function Resume() {

    const pdfDownload = () => {

    }

    return(
        <div className='resumeDiv'>
            <div className='resumeDownloads'>
                <div >
                    <a className='Download' href={pdf}>
                    <img  className='downloadImage' src='/pdf.png'/>
                    Download PDF
                    </a>
                </div>
                <div>
                    <a className='Download' href={pdf}>
                    <img  className='downloadImage' src='/docx.png'/>
                    Download DOCX
                    </a>
                </div>
            </div>
            <div className='topLine'>
                <h2>Aoife Jamie McCullough</h2> <h3>Full Stack Software Engineer</h3>
            </div>
            <div className='contactInfo'>
                <p>515-715-6756 | aoife@islandfox.dev | github.com/AoifeMcCull</p>
            </div>
            <p className='info'>A Minneapolis Software Engineer with in-industry experience in frontend and backend development.</p>

            <div>
                <h3 className='sectionHead'>SKILLS</h3>
                <p className='catHead'>Languages:</p>
                <p className='info'>Java, C, C#, Javascript, Python</p>
                <p className='catHead'>Frameworks:</p>
                <p className='info'>Spring Boot, React, Node.js, Express, MySQL, PostgreSQL, react-native</p>
                <p className='catHead'>Tech Skills:</p>
                <p className='info'>Git, Docker, Agile Development, Database Management, Software Development Life Cycle</p>
            </div>

            <div className='experienceDiv'>
                <h3 className='sectionHead'>EXPERIENCE</h3>
                <p className='Location'>Prime Digital Academy</p>
                <div className='twoColumn'>
                    <p><strong>Full Stack Software Development Student</strong></p>
                    <p>July 2024 - Graduated 12/13/2024</p>
                </div>
                <p className='lowHead'>Solo Project: Straw Hat Stock Exchange</p>
                <p className='info'>React CRUD web-app with a working peer-to-peer stock exchange for anime fans</p>
                <p className='info'>Users place orders for characters to invest, and collect characters for achievements</p>
                <p className='info'>Uses React, Express, Pg, Chart.js, node-cron, and PostgreSQL</p>

                <p className='lowHead'>Client Project: Body Confidence Experience</p>
                <p className='info'>Collaborated with 3 other developers to create a mobile application for the BCX Challenge, a 100 day personal growth and habit-building program</p>
                <p className='info'>React mobile web app with AWS S3 photo upload, automatic navigation</p>
                <p className='info'>Utilized React, node-cron, nodemailer, and PostgreSQL</p>
                <p className='Location'>ITS, Inc</p>
                <div className='twoColumn'>
                    <p className='twoColumn'><strong>Backend Software Engineering Intern</strong></p>
                    <p>May 2019-August 2019</p>
                </div>
                <p className='info'>Continuously updated Java backend, fixed bug reports, and created new database functionality</p>
            </div>

            <div className='EducationDiv'>
                <h3 className='sectionHead'>EDUCATION</h3>
                <p className='Location'>Prime Digital Academy</p>
                <div className='twoColumn'>
                    <p><strong>Full Stack Software Engineering Certification</strong></p>
                    <p>Graduated December 2024</p>
                </div>
                <p className='info'>Training in Javascript & popular frameworks, C#, public speaking & presentations, professional skill development, client work</p>
                <p className='Location'>Iowa State University</p>
                <div className='twoColumn'>
                    <p><strong>Software Engineering, Minor in Biology</strong></p>
                    <p>August 2018-May 2023</p>
                </div>
                <p>Courses:</p>
                <p className='info'>Algorithms, Database Management Systems, Digital Logic, Calculus 2, Discrete Computational Structures, Discrete Math, Embedded Systems, Advanced Programming Techniques</p>
                <p className='info'>Philosophy, Ethics, Gender Studies</p>
                <p>Student Organizations</p>
                <p className='info'>Soil and Water Conservation Club</p>
                <p className='info'>Blood Drive</p>
                <p className='info'>Pride Alliance</p>
            </div>
        </div>
    )
}

export default Resume