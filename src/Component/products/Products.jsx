import React from 'react'
import useFetch from '../../assets/hooks/useFetch';
import Loding from './../loding/Loding';
import style from './Products.module.css'
import { Link } from 'react-router-dom';
export default function Products() {
   const {data,error,isLoading}=useFetch(`https://dummyjson.com/products?limit=15`);
    console.log(data);
    console.log(error);
    if(isLoading){
      return <Loding/>
    }
  return (
    <>
    
     <section className={`${style.about}`}>
        <div className="container ">
           <div className='text-center'>
           <h2 className='text-uppercase '>Products</h2>
            {error?<div className='alert alert-danger'>{error}</div>:''}
            {data.products.map(pro=>
              <div key={pro.id} className={`${style.prod}`}>
              <h4>{pro.title}</h4>
              <div><img src={pro.thumbnail}/>
              </div>
              <p><span>Price:</span>{pro.price}$</p>
              <Link to={`/product/${pro.id}`}>Details</Link>
              </div>)} 
            </div> 
        </div>
       </section>
    </>
  )
}
