import SearchIcon from '@heroicons/react/outline/SearchIcon';
import { useState, useEffect, useContext } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import CountryCard from '../components/CountryCard';
import { CountriesContext } from '../context/CountriesProvider';

function CountriesList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [region, SetRegion] = useState('');

    const { countries, setCountries, isLoading, fetchCountries } =
        useContext(CountriesContext);

    useEffect(() => {
        fetchCountries();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <main className="bg-very-light-gray min-h-[89vh]">
            <div className="w-full max-w-7xl mx-auto flex flex-wrap flex-col p-4">
                <section className="mb-10">
                    <form
                        onSubmit={handleSubmit}
                        className="w-1/3 flex items-center py-4 px-6 rounded-md shadow-md gap-4 text-dark-gray bg-white"
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
                </section>
                {isLoading ? (
                    <div className="flex justify-center items-center w-full min-h-full">
                        <HashLoader color="silver" />
                    </div>
                ) : (
                    <section className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
                        {countries
                            .filter((el) => {
                                return el.name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase());
                            })
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
