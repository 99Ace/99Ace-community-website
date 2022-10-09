import {Link} from 'react-router-dom';

const Navbar = () => {
    return (<>
        {/* Navbar */}
        <header>
            <nav className='p-3'>
                <Link to="/" className='nav-link'>
                    <h5 className='text-start'>CODER CV</h5>
                </Link>
            </nav>
        </header>
    </>);
}

export default Navbar;