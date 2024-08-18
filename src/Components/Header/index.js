import "./index.css"

function Header(props){

    const {eachDetails, isActive, clickUpdate} = props

    const {tabId,displaytext} = eachDetails;

    const onClickFunctions = () => {
        clickUpdate(tabId);
    }

    const TextColor = isActive ? "buttons" : "button";

    return(
        <li className="list_name">
            <button type="button" className= {TextColor} onClick={onClickFunctions}>{displaytext}</button>
        </li>
    )
}

export default Header;