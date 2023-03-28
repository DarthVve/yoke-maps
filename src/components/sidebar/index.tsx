import './sidebar.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTv, faBars} from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    const [show, setShow] = useState(false);

    const showSidebar = () => { 
        setShow(!show);
    };

    const [cities] = useState(['Toronto', 'San Diego', 'Mexico City', 'Seoul', 'Havana', 'Vienna', 'Cairo', 'Reykjavik', 'Lima', 'Seville', 'Lagos', 'Tokyo', 'Suva', 'Kathmandu', 'Cape Town', 'Helsinki', 'Port Moresby', 'Addis Ababa', 'Buenos Aires', 'Bogota'])

    return (
        <section className='sidebar'>
            <div className={!show ? 'sidebar-open' : 'none'} onClick={showSidebar}>
                <FontAwesomeIcon icon={faBars} size='2xl' />
            </div>
            <div className={show ? 'sidebar-content': 'none'}>
                <div className='sidebar-inner'>
                    <h2>CITIES</h2>
                    <div className='sidebar-cities'>
                    {cities.sort().map((city, index) => { 
                        return (
                                <p className='sidebar-city' key={index}>{city}</p>
                        )
                    })}
                    </div>
                </div>
                <div className='sidebar-close' onClick={showSidebar}>
                    <FontAwesomeIcon icon={faTv} size='1x' color='red'/>
                </div>
            </div>
        </section>
    )
};

export default Sidebar;