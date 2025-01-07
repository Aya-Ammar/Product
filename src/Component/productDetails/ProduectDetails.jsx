import React from 'react'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import style from './ProduectDetails.module.css'
import Loding from './../loding/Loding';
export default function ProduectDetails() {
    const {id}=useParams();
    const {data,isLoading,error}=useFetch(`https://dummyjson.com/products/${id}`);
    console.log(data);
    if(isLoading){
          return <Loding/>
        }
  return (
    <>
        <section className={`${style.details}`}>
            <div className='container '>
            {error?<div className='alert alert-danger'>{error}</div>:''}
            <h2 className='text-center'>{data.title}</h2>
            <div  className='d-flex'> 
            <div  className={`${style.content} `} >
              <p><span className={`${style.title}`}>Description :</span>{data.description}</p>
              <p><span className={`${style.title}`}>Category :</span>{data.category}</p>
              <p><span className={`${style.title}`}>Price :</span>{data.price}$</p>
            </div>
            <div className={`${style.conImg} `}>
                 <img src={data.thumbnail}/>
            </div>
           </div>
            </div>

        </section>
    </>
  )
}
