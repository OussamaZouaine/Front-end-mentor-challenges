import axios from 'axios';
import { useState, createContext } from 'react';

const initialData = JSON.parse(localStorage.getItem('countries'));

const BASE_URL = 'https://restcountries.com/v2/';

export const CountriesContext = createContext();

function CountriesProvider({ children }) {
    const [countries, setCountries] = useState(initialData);

    console.log(countries);

    const fetchCountries = async (country = '', region = '') => {
        let url = '';
        let response;
        if (country) {
            url = `${BASE_URL}name/${country}?fullText=true`;
        }

        if (region) {
            url = `${BASE_URL}continent/${region}`;
        }

        if (url !== '') {
            response = await axios.get(url);
        } else {
            response = await axios.get(`${BASE_URL}all`);
        }
        localStorage.setItem('countries', JSON.stringify(response.data));
        setCountries(response.data);
    };

    return (
        <CountriesContext.Provider
            value={{ countries, setCountries, fetchCountries }}
        >
            {children}
        </CountriesContext.Provider>
    );
}
export default CountriesProvider;
