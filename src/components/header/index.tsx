import './header.scss';
import { Link } from 'react-router-dom';
import { yokeLogo } from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <section className='header'>
            <div className='header-logo'>
                <Link to='/'><img className='logo' src={yokeLogo} alt='Yoke Logo' loading='lazy' /></Link>
                <h1>Yoke Maps</h1>
            </div>
            <article className='header-search'>
                <input className='search' type='text' name='search' placeholder='Search 1 of 20 cities' />
                <button className='search-btn'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </article>
        </section>
    )
};

export default Header;