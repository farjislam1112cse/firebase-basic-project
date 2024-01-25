import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-red-800 '>
            <Link to="/login">
            <button className='py-2 px-8  text-white bg-gray-800'> Log in </button>
            </Link>
        </div>
    );
};

export default Header;