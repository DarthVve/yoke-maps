import './sidebar.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faBars } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
    cities: string[];
}


const Sidebar = ({cities}: SidebarProps) => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState<number | null>(null);

    const showSidebar = () => { 
        setShow(!show);
    };

    
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
                            <p style={{cursor: 'pointer'}} className={activeTab === index ? 'sidebar-city-active' : 'sidebar-city'} key={index} onClick={() => setActiveTab(index)}>{city}</p>
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