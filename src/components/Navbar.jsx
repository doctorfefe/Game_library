import "./Navbar.css"

function Navbar(){
    return(
        <nav>
            <ul className="navbar">

                <li><a href="#">Home</a></li>
                <li><a href="#">My Library</a></li>
                <li><a href="#">Search</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;