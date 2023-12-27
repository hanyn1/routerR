import React from 'react'

export default function Search({onSearchChange}) {
  return (
<div className="mb-3">
      <input
        type="text"
        placeholder="Search Info..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )
}
