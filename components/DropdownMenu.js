import React from 'react'

export default function DropdownMenu({name, options, value, onChange}) {
    return (
        <div class="form-group">
            <label for={name}>Select {name.charAt(0).toUpperCase() + name.slice(1)}:</label>
            <select id={name} name={name} value={value} onChange={onChange}>
                {Object.entries(options).map(([label, val]) => (
                    <option key={val} value={val}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    )
}