import React from 'react'

export default function Button({ icon, label, backgroundColor = "#fff", textColor = "#0C0C0C" }) {
  return (
    <button className='btn' style={{ backgroundColor,color: textColor }}>
      {icon}
      {label}
      {backgroundColor}
      {textColor}
    </button>
  );
}
