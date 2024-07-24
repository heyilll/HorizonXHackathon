import { Link } from "react-router-dom";

const logoutButton = ( ) => {  
    return (
            <li>
                <Link className="nav-link" to={`../login`}>Logout</Link>
            </li>
        );
}

export default logoutButton;