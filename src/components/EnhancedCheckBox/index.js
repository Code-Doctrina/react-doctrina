import React from 'react';
import PropTypes from 'prop-types'
import './index.css'

export default function EnhancedCheckbox({label, value,selected,id, onChange}){
    const selectedClass = (
        selected ? 'enhanced-checkbox-container-selected' : ''
    )

    const className = `enhanced-checkbox-container${selectedClass}`;
    return(
        <div className={className} onClick = {() => onChange()}>
            <input 
            type="checkbox" 
            value={value} 
            id={id} 
            checked={selected} 
            onChange = {() => onChange()}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

EnhancedCheckbox.propTypes = {
    label:PropTypes.string.isRequired,
    value:PropTypes.any.isRequired, 
    selected:PropTypes.bool.isRequired, 
    id:PropTypes.string.isRequired, 
    onChange: PropTypes.func.isRequired,
}