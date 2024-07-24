import { useState } from "react"; 
import accountService from "../services/account.service.js" 
import { Link, useNavigate } from "react-router-dom";    
import ErrorMessage from "./ErrorMessage.jsx";

function Login() {  
    const currUser = accountService.getCurrentUser();  
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [errorMessage, setErrorMessage] = useState(false); 
    const navigate = useNavigate();

    const sendLogin = async (e) => {
        e.preventDefault(); 
        setErrorMessage(false);
        try {
            const res = await accountService.loginService({ username: email, password: password }); 
            if (res.status === 200) { 
                navigate(`/`);
                window.location.reload();
            } else {
                console.error("Login failed");
                setErrorMessage(true);
            }
        } catch (error) {
            console.error("Error during login: ", error);
            setErrorMessage(true);
        }
        
        setEmail("");
        setPassword("");
    }; 

    const sendLogout = async (e) => { 
        e.preventDefault(); 
        accountService.logout();
        window.location.reload();
    }

    return (
        <>
            {currUser && (
                <div className="user-status">
                  <p className="user-info">
                    User is logged in  
                  </p>
                  <button className="logout-button" onClick={sendLogout}>
                    <span className="logout-icon">🚪</span>
                    Logout
                  </button>
                </div>
            )}
            {!currUser && <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="card shadow-lg my-5">
                    <div className="card-body p-5">
                      <h1 className="text-center mb-4" style={{ color: "#001450" }}>Login</h1>
          
                      <form onSubmit={sendLogin} method="post">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="username">Username</label>
                          <div className="input-group">
                            <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                            <input
                              type="username"
                              className="form-control"
                              id="email"
                              name="email"
                              placeholder="you@domain.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
            
                        <div className="mb-4">
                          <label className="form-label" htmlFor="password">Password</label>
                          <div className="input-group">
                            <span className="input-group-text"><i className="fas fa-lock"></i></span>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              name="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                          </div>
                        </div>
            
                        <div className="d-grid">
                          <button type="submit" className="btn btn-primary btn-lg">
                            Login
                          </button>
                        </div>
            
                        {errorMessage && <ErrorMessage message={'Try again.'} />}
                      </form>
          
                      {/* <div className="mt-4 text-center">
                        <Link to='../register'>Register here</Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>  
            }
        </>
    );
}

export default Login;