import { ReactComponent as GithubIcon } from 'assets/img/Github.svg';
import "./styles.css"
function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DsMovie</h1>
                    <a href="https://github.com/KevinShinohara">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;