import React from "react";
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({value, onChange}) => {
    return (<label className={css.filter_label} htmlFor="">
        Find contacts by name
        <input className={css.filter_input}type="text" value={value} onChange={onChange} />
    </label>)
}

Filter.protoTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}