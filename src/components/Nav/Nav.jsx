import './Nav.css';
import NavItem from './NavItem/NavItem';
import { Link } from 'react-router-dom';
function Nav(){

    const gotoGithub = () => {
        window.location.href = 'https://github.com/AoifeMcCull';
    }

    const gotoResume = () => {
        history.pushState('/resume');
    }

    return(
        <div className='navContainer'>
            <div className='navTitle'>
                islandfox.dev
            </div>
            <div className='navRight'>
                <Link to='/'>home</Link>
                /
                <NavItem itemName='portfolio' onClick={gotoGithub} />
                /
                <Link to='/resume'>resume</Link>
                /
                <Link to='/contact'>contact</Link>
            </div>
        </div>
    )
}

export default Nav;