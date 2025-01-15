import React from 'react'
import style from './Categories.module.css'
import useFetch from '../../hooks/useFetch'
import Loding from './../loding/Loding'
import { Link } from 'react-router-dom';
export default function Categories() {
  const {data,error,isLoading}=useFetch(`https://dummyjson.com/products/categories`);
  console.log(data);
  console.log(error);
  if(isLoading){
    return <Loding/>
  }
  return (
    <>
    <section className={`  ${style.about}`}>
      <div className="container align-items-center">
      <div className="text-center">
              <h2 className='text-uppercase'>Categories</h2>
              {error?<div className='alert alert-danger'>{error}</div>:''}
                        {data.map((catog,index)=>(
                          <div key={index} className={`${style.cat}`}>
                          <h4>{catog.name}</h4> 
                          <Link to={`/categories/${catog.name}`}>Details</Link>
                          </div>))}     
          </div>  
      </div>
    </section>
    </>
  )
}
