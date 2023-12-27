import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navige=useNavigate()
  return (
    <div>
      <h1> Hello, I'm here to study </h1>
      <button onClick={()=>{navige('/Info')}}>Click</button>
      <button onClick={()=>{navige('/Pc')}}>Click</button>
    </div>
  )
}
