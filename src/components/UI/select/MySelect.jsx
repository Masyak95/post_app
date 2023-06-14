import React from 'react';
import { v4 as uuid4 } from 'uuid';

const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option => (
                <option key={uuid4()} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default MySelect;
