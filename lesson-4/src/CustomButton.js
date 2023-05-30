import React from 'react'

function CustomButton({ label, onClick, style }) {
  return (
    <button onClick={onClick} style={{
        ...style,
        borderColor: 'red',
    }}>{label}</button>
  )
}

export default CustomButton