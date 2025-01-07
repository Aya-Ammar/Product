import React from 'react'
import useFetch from '../../hooks/useFetch';
import style from './Quotes.module.css'
import Loding from '../loding/Loding';
export default function Quotes() {
  const{data,isLoading,error}=useFetch('https://dummyjson.com/quotes');
  console.log(data);
  if(isLoading){
    return <Loding/>
  }
  return (
    <>
   <section className={`${style.que}`}>
    <div className='continer '>
      <h2 className='text-center'>Quotes</h2>
      {error?<div className='alert alert-danger'></div>:''}
      <div className={`${style.quotesgrid}`}>
       {data.quotes.map(quote => 
       <div key={quote.id} className={`${style.quoteitem}`}>
       <p className={`${style.quotetext}`}>{quote.quote}</p>
       <p className={`${style.quoteauthor}`}>{quote.author}</p>
       
       </div>
        )}</div>
     

    </div>
   </section>
    </>
  )
}
