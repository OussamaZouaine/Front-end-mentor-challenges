import { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';
import { CountriesContext } from '../context/CountriesProvider';
import ArrowLeftIcon from '@heroicons/react/outline/ArrowLeftIcon';

function Country() {
    const { name } = useParams();
    const { countries, isLoading, fetchCountries } =
        useContext(CountriesContext);

    useEffect(() => {
        fetchCountries(name);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className="bg-transparent min-h-[90vh] py-6">
            <div className="w-full max-w-7xl mx-auto flex flex-wrap flex-col p-4">
                <Link
                    to={'/'}
                    className="w-fit flex items-center mb-16 py-2 px-6 rounded-md shadow-md gap-2 text-dark-gray dark:text-white bg-white dark:bg-dark-blue font-semibold"
                >
                    <ArrowLeftIcon className="w-5 h-5" /> Back
                </Link>
                {isLoading ? (
                    <div className="flex justify-center items-center w-full min-h-full">
                        <HashLoader color="silver" />
                    </div>
                ) : (
                    <section className="grid md:grid-cols-2 gap-12">
                        <img
                            src={countries[0].flags.svg}
                            alt=""
                            className="w-full shadow-md"
                        />
                        <div className="flex flex-col justify-center gap-6">
                            <h1 className="text-2xl font-bold mb-3">
                                {countries[0].name}
                            </h1>
                            <div className="country-info text-sm flex flex-col md:flex-row gap-y-8 justify-between leading-6">
                                <div>
                                    <p>
                                        <span className="font-semibold">
                                            Native Name:
                                        </span>{' '}
                                        {countries[0].nativeName}
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            Population:
                                        </span>{' '}
                                        {countries[0].population.toLocaleString()}
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            Region:
                                        </span>{' '}
                                        {countries[0].region}
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            Sub Region:
                                        </span>{' '}
                                        {countries[0].subregion}
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            Capital:
                                        </span>{' '}
                                        {countries[0].capital}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <span className="font-semibold">
                                            Top Level Domain:
                                        </span>{' '}
                                        {countries[0].topLevelDomain[0]}
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            Currencies:
                                        </span>{' '}
                                        {countries[0].currencies
                                            ? countries[0].currencies[0].name
                                            : ' '}
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            Languages:
                                        </span>{' '}
                                        {countries[0].languages.map(
                                            (language, index) =>
                                                index <
                                                countries[0].languages.length -
                                                    1
                                                    ? language.name + ', '
                                                    : language.name
                                        )}
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm space-y-2 md:space-x-2">
                                <span className="font-semibold block md:inline">
                                    Borders:{' '}
                                </span>
                                {countries[0].borders
                                    ? countries[0].borders.map(
                                          (border, index) => (
                                              <button
                                                  key={index}
                                                  className="text-dark-gray dark:text-white bg-white dark:bg-dark-blue font-semibold text-xs rounded-sm shadow-md py-1 px-4 mr-2 lowercase"
                                              >
                                                  {border}
                                              </button>
                                          )
                                      )
                                    : ' '}
                            </p>
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}
export default Country;
