import axios from 'axios';
import { useState, createContext } from 'react';

const BASE_URL = 'https://restcountries.com/v2/';

export const CountriesContext = createContext();

function CountriesProvider({ children }) {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCountries = async (country = '') => {
        setIsLoading(true);
        let url = '';
        let response;
        if (country) {
            url = `${BASE_URL}name/${country}?fullText=true`;
        }

        if (url !== '') {
            response = await axios.get(url);
        } else {
            response = await axios.get(`${BASE_URL}all`);
        }

        setCountries(response.data);
        setIsLoading(false);
    };

    return (
        <CountriesContext.Provider
            value={{ countries, setCountries, isLoading, fetchCountries }}
        >
            {children}
        </CountriesContext.Provider>
    );
}
export default CountriesProvider;
