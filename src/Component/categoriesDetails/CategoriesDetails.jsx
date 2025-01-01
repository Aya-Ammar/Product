import React from 'react'
import { Link,  useParams } from 'react-router-dom'
import useFetch from '../../assets/hooks/useFetch';
import style from './CategoriesDetails.module.css'
import Loding from './../loding/Loding';
export default function CategoriesDetails() {
    const{name}=useParams();
    const{data,isLoading,error}=useFetch(`https://dummyjson.com/products/category/${name}`);
    console.log(data.products);
    console.log(name);
     if(isLoading){
          return <Loding/>
        }
  return (
   <>
    <section className={`${style.about}`}>
        <div className={`container `}>
            <h2 className={`text-center `}>{name} Products </h2>
            {error?<div className='alert alert-danger'>{error}</div>:''}
            {data.products.map(product =>
                <div key={product.id} className={`${style.prod}`}>
                    <h4>{product.title}</h4>
                    <div><img src={product.thumbnail}/></div>
                    <p>Price:${product.price}</p>
                    <Link to={`/product/${product.id}`}>Details</Link>
                    
                </div>
                
                
            )}
                
            
            

            
        </div>
    </section>
   </>
  )
}
