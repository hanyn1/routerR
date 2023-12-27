import React from 'react'
import Data from '../data/Data'
import Add from './Add'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Search from './Search'
export default function Info() {
    const [infos,setInfos]=useState (Data)
    const [filter, setFilter] = useState('');
    const handleFilter = (newFilter) => {
        setFilter(newFilter);
      };
    
      const filteredInfo = infos.filter((info) =>
        info.name.toLowerCase().includes(filter.toLowerCase())
      );
    const handleInfo = (newInfo) => {
        const updatedInfo = [...infos,{ ...newInfo, id: infos.length + 1 }];
        setInfos(updatedInfo);
      };
  return (
    <div>
        <Search onSearchChange={handleFilter} />
      {
       filteredInfo.map((ele)=>(
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
      <Add onAdd={handleInfo} />
    </div>
  )
}
