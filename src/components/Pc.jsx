import React from 'react'
import Data1 from '../data/Data1'
import 'bootstrap/dist/css/bootstrap.css'
export default function Pc() {
  return (
    <div>
          {
        Data1.map((ele)=>(
            <div className='row'>
<div class="card" style={{width: "18rem"}} key={ele.id}>
  <img class="card-img-top" src={ele.image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{ele.name}</h5>
    <p class="card-text">{ele.price}</p>
  </div>
</div>
</div>
        ))
      }
    </div>
  )
}
