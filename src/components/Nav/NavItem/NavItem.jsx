import './NavItem.css'
function NavItem(props){
    return(
        <div className='NavItem' onClick={props.onClick}>
            {props.itemName}
        </div>
    )
}

export default NavItem