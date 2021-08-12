// to give photo credit

import React from 'react';

const Footer = () => {
    return (
        <footer className='acknowledgements' fixed='bottom'>
            <p>
                Designed by Catherine Smith     ||      Made with React <i className='fab fa-react'></i>    ||      Copyright © 2021    ||     Photo by <a href="https://freeimages.com/photographer/amandafoe-48011">Amanda Dafoe</a> from <a href="https://freeimages.com">FreeImages</a>
                {/* update with whichever background photo I choose */}
            </p>
        </footer>
    );
};

export default Footer;