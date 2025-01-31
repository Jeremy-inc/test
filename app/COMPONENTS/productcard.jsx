import Image from 'next/image'
import React from 'react'

export default function ProductCard() {
  return (
      <div className=" rounded-lg border-solid border-2 border-grey-600 mx-auto my-20 w-80 h-[580px] justify-center">
      
      <div className= "w-full h-1/2 bg-green-500 flex items-start justify-center ">
          <Image  src={'/watch g.png'}
            alt=""
             width={250}
            height={200}/>                                  
          </div>
      
      <div className=" my-10 text-[30px] justify-center text-center">
      <h1>Lorem Ipsum</h1>
      </div>
      
      <div className=" my-10 text-xs justify-center text-center">
      <h1>Lorem ipsum dolor sit amet
        consecteteur adipising elit set diam
        nonuummy nibh euismod tincidant ut 
      </h1>
      </div>
      
      <div className=" my-10 flex justify-between items-center">
        <h1 className="text-xl font-bold">US $499.95</h1>
        <button className=" rounded-lg border-solid border-2 border-grey-600">Add to cart</button>
      </div>
          </div>
  )         }                 