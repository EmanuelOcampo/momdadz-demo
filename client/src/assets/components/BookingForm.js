import React from 'react'

const BookingForm = ({type,label,name, handleChange,value,placeholder, minDate}) => {
  return (
    <div className="form-group">
        <span className="form-label">{label}</span>
        <input 
            className="form-input" 
            type={type}
            name={name}
            value={value}
            placeholder={placeholder} 
            onChange={handleChange}
            min={minDate}
          />
            
  </div>
  )
}

export default BookingForm