import Logo from '../logo';
import Navbar from '../navbar';

import './style.css'

function Header() {
    return (
        <header className='App-header'>
          <Logo />
          <Navbar />
        </header>
    );
}

export default Header