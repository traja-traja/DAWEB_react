import React from 'react';
import './FilterShoppingList.css';

const FilterShoppingList = () => {
    return (
        <form class="filtrovani-seznamu">
            <label>
                <input type="checkbox" className="filtrovani-seznamu__input" />
                Skrýt zakoupené položky
            </label>
        </form>
    );
};

export default FilterShoppingList;