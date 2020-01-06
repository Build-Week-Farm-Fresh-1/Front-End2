import React from 'react';
import {Link} from 'react-router-dom';

const HeaderWithLogOut = () => {
    return (
        <section className='header-with-log-out'>
            <div>
                <Link to='/'><h1>Farm Fresh</h1></Link>
                <Link className='log-out' to='/' onClick={() => localStorage.removeItem('token')}>Log Out</Link>
            </div>
        </section>
    )
};

export default HeaderWithLogOut;