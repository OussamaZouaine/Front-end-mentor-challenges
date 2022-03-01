import SearchIcon from '@heroicons/react/outline/SearchIcon';
import { useState, useEffect, useContext } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import CountryCard from '../components/CountryCard';
import Dropdown from '../components/Dropdown';
import { CountriesContext } from '../context/CountriesProvider';

function CountriesList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRegion, setFilteredRegion] = useState('');

    const { countries, isLoading, fetchCountries } =
        useContext(CountriesContext);

    useEffect(() => {
        fetchCountries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <main className="bg-transparent min-h-[90vh] pt-4">
            <div className="w-full max-w-7xl mx-auto flex flex-wrap flex-col p-4">
                <section className="mb-10 md:mb-16 flex justify-between items-center flex-wrap gap-y-4">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full sm:w-2/4 md:w-2/5 flex items-center py-4 px-6 rounded-md shadow-md gap-4 text-dark-gray dark:text-white bg-white dark:bg-dark-blue"
                    >
                        <label htmlFor="country">
                            <SearchIcon className="w-5 h-5" />
                        </label>
                        <input
                            className="bg-transparent outline-none font-semibold text-[.85rem] w-full"
                            type="text"
                            name="country"
                            id="country"
                            placeholder="Search for a Country..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </form>

                    <Dropdown region={setFilteredRegion} />
                </section>
                {isLoading ? (
                    <div className="flex justify-center items-center w-full min-h-full">
                        <HashLoader color="silver" />
                    </div>
                ) : (
                    <section className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
                        {countries
                            .filter((country) =>
                                country.region
                                    .toLowerCase()
                                    .includes(filteredRegion.toLowerCase())
                            )
                            .filter((country) =>
                                country.name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                            )
                            .map((country, index) => (
                                <CountryCard key={index} country={country} />
                            ))}
                    </section>
                )}
            </div>
        </main>
    );
}
export default CountriesList;
