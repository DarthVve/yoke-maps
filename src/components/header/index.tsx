import './header.scss';
import { Link } from 'react-router-dom';
import { yokeLogo } from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps { 
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchRes: string[];
};



const Header = ({ onChange, searchRes }: HeaderProps) => {
    const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
    };

    return (
        <section className='header'>
            <div className='header-logo'>
                <Link to='/'><img className='logo' src={yokeLogo} alt='Yoke Logo' loading='lazy' /></Link>
                <h1>Yoke Maps</h1>
            </div>
            <div className='header-search-container'>
                <article className='header-search'>
                    <input className='search' type='text' name='search' placeholder='Search 1 of 20 cities' onChange={handleChanges}/>
                    <button className='search-btn'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </article>
                <div className={searchRes.length === 0 ? 'none' : 'header-search-results'}>
                    {searchRes.map((city, index) => { 
                        return (
                            <p key={index}>{city}</p>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};

export default Header;