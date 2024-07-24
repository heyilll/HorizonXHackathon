import { Link, useNavigate } from "react-router-dom";  
import { useState } from "react";
import accountService from "../services/account.service";
import LoginStatus from "./LoginStatus";
import LogoutButton from "./logoutButton";
import logo from "../images/lighthouse.svg"; 

function Header() { 
    const [search, setSearch] = useState("");  
    const currUser = accountService.getCurrentUser();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        if (search.trim() == "") {
            return;
        }
        event.preventDefault(); 
        navigate(`../search/${search}`);
        setSearch("");
    }
  
    return ( 
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-danger-subtle">
        <div className="container-fluid">
            <img src={logo} alt="" width={50} height={50}/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item" >
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li> 
                    <li className="nav-item" >
                        <Link className="nav-link" aria-current="page" to="/graph">Graph</Link>
                    </li> 
                    {!currUser && <LoginStatus />}
                    {currUser && <LogoutButton />} 
                </ul> 
                <form className="d-flex" role="search" onSubmit={handleSubmit}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    );
} 

export default Header;