import React, {useState} from 'react'
// import { toyCards } from './components/toys/ToyIndex'

const SearchBar = (props) => {
    const { toys, searchInput, setSearchInput, displayToys, setDisplayToys } = props
    // console.log('these are the toys', toys)


    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return (
        <div>

            <input
            className='searchBar'
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} 
            />

        </div>

    )
};

export default SearchBar;