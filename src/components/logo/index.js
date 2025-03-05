import './style.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <Link to={'/'}>
            <div className='logo'>
                <img src={logo} alt='logo' />
                <p><strong className='strong'>Alura</strong>Books</p>
            </div>
        </Link>
    );
}

export default Logo;