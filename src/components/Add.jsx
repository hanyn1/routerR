import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Swal from 'sweetalert2'
import { useState } from 'react'
export default function Add({onAdd}) {
    const [newInfo,setNewInfo]=useState({
        name:"",
        price:0,
        image:""
    })
    const handle=()=>{

        if (newInfo.name.trim() === '' || newInfo.price.trim() === '' || newInfo.image.trim() === '' ) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please fill in all fields!',
            });return;
        }
            onAdd(newInfo)
            setNewInfo({
                name:"",
                price:"",
                image:""
            })
        
            Swal.fire({
                icon: 'success',
                title: 'Info  Added!',
                showConfirmButton: false,
                timer: 1500, // Automatically close after 1.5 seconds
              })
            }
  return (
    <div>
      <h1 style={{color:'red'}}>Add new Pc</h1>
      <form >
      <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newInfo.name}
            onChange={(e) => setNewInfo({ ...newInfo, name: e.target.value })}
          />
    </div>
    <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Price
          </label>
          <input
            type="text"
            id="inputPrice"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newInfo.price}
            onChange={(e) => setNewInfo({ ...newInfo, price: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            image
          </label>
          <input
            type="text"
            id="inputImage"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newInfo.image}
            onChange={(e) => setNewInfo({ ...newInfo, image: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" type="button" onClick={handle}>
          Add Pc
        </button>
      </form>
    </div>
  )
}
