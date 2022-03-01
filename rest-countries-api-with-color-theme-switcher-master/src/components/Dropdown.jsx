import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { useState } from 'react';

function Dropdown({ region }) {
    const [isOpen, setIsOpen] = useState(false);

    const filterByRegion = (e) => {
        region(e.target.innerText);
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-60 relative rounded-md shadow-md space-y-2 text-darker-blue dark:text-white bg-white dark:bg-dark-blue">
            <div
                className="w-full py-4 px-6 text-sm font-semibold  flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen((currentValue) => !currentValue)}
            >
                Filter by Region
                {isOpen ? (
                    <ChevronUpIcon className="w-4 h-4" />
                ) : (
                    <ChevronDownIcon className="w-4 h-4" />
                )}
            </div>

            <div
                className={
                    isOpen
                        ? 'w-full h-fit absolute z-50 overflow-hidden rounded-md shadow-md dark:text-white bg-white dark:bg-dark-blue'
                        : 'hidden'
                }
            >
                <p
                    className="cursor-pointer pt-2 pb-1 px-6 hover:font-semibold hover:bg-very-light-gray hover:dark:bg-very-dark-blue"
                    onClick={filterByRegion}
                >
                    Africa
                </p>
                <p
                    className="cursor-pointer py-1 px-6 hover:font-semibold hover:bg-very-light-gray hover:dark:bg-very-dark-blue"
                    onClick={filterByRegion}
                >
                    Americas
                </p>
                <p
                    className="cursor-pointer py-1 px-6 hover:font-semibold hover:bg-very-light-gray hover:dark:bg-very-dark-blue"
                    onClick={filterByRegion}
                >
                    Asia
                </p>
                <p
                    className="cursor-pointer py-1 px-6 hover:font-semibold hover:bg-very-light-gray hover:dark:bg-very-dark-blue"
                    onClick={filterByRegion}
                >
                    Europe
                </p>
                <p
                    className="cursor-pointer pt-1 pb-2 px-6 hover:font-semibold hover:bg-very-light-gray hover:dark:bg-very-dark-blue"
                    onClick={filterByRegion}
                >
                    Oceania
                </p>
            </div>
        </div>
    );
}
export default Dropdown;
