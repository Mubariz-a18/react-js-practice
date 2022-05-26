function Header() {
    return <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> CARS UI</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-items">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-items">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-items">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                    <li className="nav-items">
                        <a className="nav-link" href="/users">Users</a>
                    </li>
                </ul>

            </div>

        </nav>
    </div>
}

export default Header;