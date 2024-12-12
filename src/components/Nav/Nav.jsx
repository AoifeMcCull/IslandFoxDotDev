import './Nav.css';
import NavItem from './NavItem/NavItem';
function Nav(){
    return(
        <div className='navContainer'>
            <div className='navTitle'>
                islandfox.dev
            </div>
            <div className='navRight'>
                <NavItem itemName='home' />
                /
                <NavItem itemName='portfolio' />
                /
                <NavItem itemName='resume' />
                /
                <NavItem itemName='contact' />
            </div>
        </div>
    )
}

export default Nav;