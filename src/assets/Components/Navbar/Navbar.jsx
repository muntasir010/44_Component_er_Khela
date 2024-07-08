// import PropTypes from 'prop-types';
import Link from '../Link/Link';
import { AiOutlineMenu, AiOutlineCloseSquare } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Profile', path: '/profile/:username' }
    ];

    return (
        <nav className='my-4 lg:my-8'>
            <div onClick={() => setOpen(!open)} className='md:hidden text-3xl text-fuchsia-500'>
                {
                    open === true ? <AiOutlineCloseSquare></AiOutlineCloseSquare>
                    : <AiOutlineMenu></AiOutlineMenu>
                }

            </div> 
            <ul className={`md:flex gap-10 absolute duration-1000
                ${open ? 'top-16' : '-top-60'}
                md:static p-3 bg-[#7272] rounded-xl`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
                 {/* ${open ? '' : 'hidden'} open and close when click menu button */}
                 
                 {/* duration-1000 ${open ? 'top-16' : '-top-60'} when clicked open the menu left the bottom and when its close its up the navbar*/ }
            </ul>
        </nav>
    );
};

Navbar.propTypes = {

};

export default Navbar;