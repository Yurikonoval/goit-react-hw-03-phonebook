import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    <span className={s.labeltext}>Find contacts by name</span>
    <input
      className={s.input}
      type="text"
      name="filter"
      placeholder="Enter name"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
