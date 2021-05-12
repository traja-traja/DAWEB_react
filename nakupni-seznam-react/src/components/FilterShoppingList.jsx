import React from 'react';
import './FilterShoppingList.css';

const FilterShoppingList = (props) => {
    const handleInputChanged = (event) => {
        props.onFilterChange(
            event.target.checked
        );
    };

    return (
        <form className="filtrovani-seznamu">
            <label>
                <input checked={props.filterIsChecked} onChange={handleInputChanged} type="checkbox" className="filtrovani-seznamu__input" />
                Skrýt zakoupené položky
            </label>
        </form>
    );
};

export default FilterShoppingList;