import React from 'react'
import Categories from './Component/categories/Categories';
import Navbar from './Component/navbar/Navbar';
import Products from './Component/products/Products';
import Addproduct from './Component/addproduct/Addproduct';
import Quotes from './Component/quotes/Quotes';
import { Route, Routes } from 'react-router-dom';
import Footer from './Component/footer/Footer';
import Home from './Component/home/Home';
import ProduectDetails from './Component/productDetails/ProduectDetails';
import CategoriesDetails from './Component/categoriesDetails/CategoriesDetails';

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route  path='/Categories' element={<Categories/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
      <Route path='/Addproduct' element={<Addproduct/>}></Route>
      <Route path='/Quotes' element={<Quotes/>}></Route>
      <Route path='/product/:id' element={<ProduectDetails/>}></Route>
      <Route path='/Categories/:name' element={<CategoriesDetails/>}></Route>
    </Routes>
    <Footer/>


    </>
  )
}
