import React from 'react'
import useFetch from '../../hooks/useFetch';
import Loding from './../loding/Loding';
import style from './Home.module.css'
import { Link } from 'react-router-dom';
export default function Home() {
    const {data: categories,error:error1,isLoading:isLoading1}=useFetch(`https://dummyjson.com/products/categories`);
    const {data: products,error:error2,isLoading:isLoading2}=useFetch('https://dummyjson.com/products?limit=6');
      console.log(categories);
      console.log( products);
      
      if(isLoading1||isLoading2){
        return <Loding/>
      }
      
  return (
    <>
     <section className={`  ${style.about}`}>
           <div className="container text-center">
           <div className=' text-center'>       
              <h2 className='text-uppercase'>About</h2>
             <p>It is the place where all the different categories available on the site are collected.
                This page makes it easy to explore products in an organized way, as the products are classified based on the category they belong to. Whether you are looking for a specific product, or want to browse through the various options, the categories page provides you with a simple and effective way to get to what you are looking for quickly and easily. 
               If you want to know more about the category, you can click on details for more details.</p>
             </div>
           <div >
                   <h3 className='text-uppercase'>Categories</h3>                  
                             {categories.map(catog=>
                               <div  key={catog.slug} className={`${style.cat} `}>
                               <h4>{catog.name}</h4> 
                               <Link to={`/categories/${catog.name}`} >Details</Link>
                               </div>
                               )} 
                                
            </div>  
            <div >
              <h3 className={`text-uppercase  `}>Products</h3>
              {products.products.map(product=>
                <div key={product.id} className={`${style.prod} `}>
                  <h4>{product.title}</h4>
                  <div><img src={product.thumbnail}/></div>
                  <p><span>Price:</span>{product.price}$</p>
                  <Link to={`/product/${product.id}`}>Details</Link>
                </div>
                
              )}
            
            </div>
           </div>
         </section>
    </>
  )
}
