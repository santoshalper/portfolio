import { Link, useLocation } from 'react-router-dom';

export default function header() {
    const currentPage = useLocation().pathname;

    return(
        <header>
            <h1>Vijay Natarajan</h1>
            <nav className="nav">
                <Link to="/" className={currentPage === '/' ? 'headlink active' : 'headlink'}>About Me</Link>
                <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'headlink active' : 'headlink'}>Portfolio</Link>
                <Link to="/Contact" className={currentPage === '/Contact' ? 'headlink active' : 'headlink'}>Contact</Link>
                <Link to="/Resume" className={currentPage === '/Resume' ? 'headlink active' : 'headlink'}>Resume</Link>
            </nav>
        </header>
    )
}