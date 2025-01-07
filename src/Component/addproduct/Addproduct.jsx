import React from 'react'
import Loding from './../loding/Loding';
import style from './Addproduct.module.css'
export default function Addproduct() {

    
  return (
   
    <>
    <div className={`${style.add} `}>
      <h2 className='text-center'>Add Product</h2>
      <div className="container w-50 m-auto my-5">
      <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Product Name <span className="text-danger">*</span></label>
      <input id="courseName" type="text" className="form-control" aria-describedby="emailHelp" />
      </div>
  
      <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Product Category <span className="text-danger">*</span></label>
      <input id="courseCategory" type="text" className="form-control" />
      </div>
  
      <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Product Price <span className="text-danger">*</span></label>
      <input id="coursePrice" type="number" className="form-control" />
      </div>
  
      <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Product Description</label>
      <textarea id="courseDescription" className="form-control" defaultValue={""} />
      </div>
      <button type="button" className="btn btn-outline-primary" id="click">Add Course</button>
      <button type="button" className="btn btn-outline-primary">Clear</button>

   </div>
   </div>
    </>
  )
}
