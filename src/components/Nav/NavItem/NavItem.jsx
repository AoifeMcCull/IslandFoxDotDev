import './NavItem.css'
function NavItem(props){
    return(
        <div className='NavItem' onClick={props.onClick}>
            <p>{props.itemName}</p>
        </div>
    )
}

export default NavItem