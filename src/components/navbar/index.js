import './style.css'

import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import { Link } from 'react-router-dom'

const options = ['categories', 'favorites', 'shelf']
const icons = [perfil, sacola]

function Navbar() {
    return (
        <ul className='nav'>
            { options.map( (option) => (
            <Link to={`/${option}`}><li><p>{option}</p></li></Link>
            ) ) }
            { icons.map( (icon) => (
            <li><img src={icon} alt='' /></li>
            ) ) }
        </ul>
    );
}

export default Navbar;