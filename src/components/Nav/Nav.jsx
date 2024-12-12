import './Nav.css';
import NavItem from './NavItem/NavItem';
function Nav(){

    const gotoGithub = () => {
        window.location.href = 'https://github.com/AoifeMcCull';
    }

    return(
        <div className='navContainer'>
            <div className='navTitle'>
                islandfox.dev
            </div>
            <div className='navRight'>
                <NavItem itemName='home' />
                /
                <NavItem itemName='portfolio' onClick={gotoGithub} />
                /
                <NavItem itemName='resume' />
                /
                <NavItem itemName='contact' />
            </div>
        </div>
    )
}

export default Nav;