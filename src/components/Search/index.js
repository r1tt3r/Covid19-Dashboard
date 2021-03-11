/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { InputBusca } from './styles';

function Search(name, placeholder, onChange, ...props) {
  return (
    <InputBusca
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  );
}

export { Search };
