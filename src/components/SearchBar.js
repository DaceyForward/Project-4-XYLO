import React, {useState} from 'react'
// import { toyCards } from './components/toys/ToyIndex'

const SearchBar = (props) => {
    const { toys, searchInput, setSearchInput, filterText } = props
    // console.log('these are the toys', toys)


    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    // if (searchInput.length > 0) {
    //     toys.filter((toy) => {
    //     return toy.name.match(searchInput);
  
    // });
    // }

    //from the mdn docs about filter method..
    // function filterToys(toys, query) {
    //     return toys.filter((toy) => toy.toLowerCase().includes(query.toLowerCase()));
    //   }

    //   const filterToys((toys, query) => {
    //         return toys.filter((toy) => toy.toLowerCase().includes(query.toLowerCase()))
    //   })
      

    return (
        <div>

            <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} 
            // {filterToys}
            />

        </div>

    )
};

export default SearchBar;