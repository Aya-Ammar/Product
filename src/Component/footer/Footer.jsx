import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
    <>
    
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

    <footer className={`${style.loc}`}>
        <div className="container ">
            <div className='location '>
                <div className={`${style.loca}`}>
                <h4 className='text-uppercase'>Location</h4>
                <p>
                2215 John Daniel Drive
                Clark, MO 65243
                </p>
                </div>
                <div className={`${style.loca}`}>
                    <h4 className='text-uppercase text-center'>Around the Web</h4>
                    <ul className={`${style.localist} `}>
                           <li className={`${style.locali}`} >
                          <a href='#'> <i class="fa-brands fa-facebook-f"></i></a>
                            </li>
                           <li className={`${style.locali}`}>
                           <a href='#'><i class="fa-brands fa-twitter "></i>   </a>                          
                           </li>
                            <li className={`${style.locali}`}>
                            <a href='#'><i class="fa-brands fa-linkedin-in "></i></a>
                            </li>
                            <li className={`${style.locali}`}>
                            <a href='#'><i class="fa-brands fa-dribbble  "></i></a>
                           </li>
                            </ul>
                </div>
                
            </div>
        </div>

    </footer>
    </>
  )
}
