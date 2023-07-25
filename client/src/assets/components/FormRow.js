import React from 'react'

const FormRow = ({type,value, name, handleChange, labelText, required}) => {
  return (
    <div className='form-row'>
          <label htmlFor={name} className='form-label'>
            {labelText || name}
          </label>

          <input
            type={type}
            value={value}
            name={name}
            onChange={handleChange}
            className='form-input'
            required={required}
          />
        </div>
  )
}

export default FormRow