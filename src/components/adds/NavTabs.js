import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {

    const linkStyle = { border: '1px black', padding: '5px', textDecoration: 'none', };


    return (
        <header className='header' >
            <div className=' H-1 '>
                <img alt="Logo" className="logo" src="Logos/SubCode-logos_white.png" />
                <div>
                    <h1 className="H-T-1"> S U B C O D E </h1>
                    <h2 className='H-T-2'> Marketing and Web Design </h2>
                </div>

                <nav className="main-header-menu">
                    <ul
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            textDecoration: 'none',
                        }}

                        className="list-unstyled"
                    >

                        <li style={linkStyle} className='nav-tab'>
                            <a
                                href="#home"
                                onClick={() => handlePageChange('Home')}
                                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                            >
                                Home
                            </a>
                        </li>

                        <li style={linkStyle} className='nav-tab'>
                            <a
                                href="#about"
                                onClick={() => handlePageChange('About')}
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}

                            >
                                About
                            </a>
                        </li>

                        <li style={linkStyle} className='nav-tab'>
                            <a
                                href="#resume"
                                onClick={() => handlePageChange('Resume')}
                                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                Resume
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavTabs;