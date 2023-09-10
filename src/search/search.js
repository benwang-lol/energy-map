import { useState } from "react";
import {AsyncPaginate} from "react-select-async-paginate"; /*async-paginate supports loading page by page (alt to Async)*/
import { states_url, statesAPIOptions } from "../api";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        try {
            const response = fetch(states_url, statesAPIOptions);
            const result = response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    const handleOnChange = (userInput) => {
        setSearch(userInput);
        onSearchChange(userInput);
    }

    return (
        <AsyncPaginate
            placeholder = "Search for state"
            debounceTimeout = {600}
            value = {search}
            onChange = {handleOnChange} /*use brackets to write things in JS, rest is HTML*/
            loadOptions = {loadOptions}
        />
    )
}

export default Search;