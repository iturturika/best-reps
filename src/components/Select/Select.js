'use client'
import React from 'react';
import Select from 'react-select';
import './Select.scss'

export default function BasicSelect({options, label, id, selectedOption, setSelectedOption}) {

  return (
     <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder={label}
        instanceId={id}
        styles={{
            control: () => ({
                display: 'flex',
                width: '300px',
                height: '60px',
                borderRadius: '10px',
                background:' #FFF',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.04)',
                outline: 'none',
                border: 'none',
                cursor: 'pointer'
            }),
        }}
      />
  );
}