import { Link } from "react-router-dom";

const loginStatus = ( ) => {

    return (
            <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="../login">Log in</Link>
            </li>
        );
}

export default loginStatus;