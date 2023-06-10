import React from 'react'

const FormField = ({ label, name, type, value, onChange, error }) => {
  return (
    <div>
        <label>{label} {' '}</label>
        <input name={name} type={type} value={value} onChange={onChange} />
        {error && <small style={{color: 'red'}}>{error}</small>}
    </div>
  )
}

export default FormField