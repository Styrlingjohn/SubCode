import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {

    const linkStyle = { border: '1px black', padding: '5px', textDecoration: 'none', };


    return (
        <header className='navHeader' >
            <nav className="main-header-menu">
                <ul
                    style={{
                        display: 'flex',
                        fontFamily: 'Cantarell',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
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
        </header>
    );
}

export default NavTabs;