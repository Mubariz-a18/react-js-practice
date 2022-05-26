import { Link } from "react-router-dom";

function Header() {
    return <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> CARS UI</a> 
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-items">
                        <Link className="nav-link" to={'/'}>Home</Link>
                    </li>
                    <li className="nav-items">
                        <Link className="nav-link" to={'/about'}>About</Link>
                    </li>
                    <li className="nav-items">
                        <Link className="nav-link"to={'/contact'}>Contact</Link>
                    </li>
                    <li className="nav-items">
                        <Link className="nav-link"to={'/users'}>Users</Link>
                    </li>

                </ul>
            <div>
                <Link className="btn btn-sm btn-danger" to='/register'>Register</Link>
            </div>

            </div>
        </nav>
    </div>
}

export default Header;