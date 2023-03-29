import './landing.scss';
import { useState } from 'react';
import { Header, Sidebar } from '../../components';

const Landing = () => {
    const [cities] = useState<string[]>(['Toronto', 'San Diego', 'Mexico City', 'Seoul', 'Havana', 'Vienna', 'Cairo', 'Reykjavik', 'Lima', 'Seville', 'Lagos', 'Tokyo', 'Suva', 'Kathmandu', 'Cape Town', 'Helsinki', 'Port Moresby', 'Addis Ababa', 'Buenos Aires', 'Bogota']);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<string[]>([]);
    
    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            setSearchResults([]);
        } else { 
            setSearchTerm(event.target.value);
            const results = cities.filter(city => city.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchResults(results);
        }
    };

    return (
        <>
            <Header onChange={handleSearchTermChange} searchRes={searchResults} />
            <Sidebar cities={cities} />
        </>
    )
};

export default Landing;
