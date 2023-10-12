import React, {useState} from 'react'


const SearchBar = (toys, toy) => {

 const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        toys.name.filter((toy) => {
        return toy.name.match(searchInput);
    });
    }

    return (
        <div>

            <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />

            </div>

    )
};

export default SearchBar;