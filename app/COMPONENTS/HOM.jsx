import Image from "next/image";import { FaXmark } from "react-icons/fa6"

export default function HOM() {
  return (
    <div className="mx-auto my-20 w-[70vw] h-[80vh] flex items-center ">
    <div className="w-full h-full bg-blue-600 flex items-center justify-center">
    <Image src={'/hfone.png'}
      alt=""
       width={350}
      height={300}/>                                   
    </div>
     
    <div className="w-full h-full bg-blue-50">
   
    <FaXmark className="flex text-slate-300 ms-auto me-2"/>
    <div className="w-7/12 flex mx-auto my-5 border-b border-b-slate-300 p-4">
    
      <div>
      <h1>PRODUCT</h1>
    <h1 className="text-blue-700 text-2xl font-bold">SENNHEISER MOMENTUM</h1>
      </div> 
      <Image src={'/hfone.png'}
      alt=""
      
      width={100}
      height={100}/>
    </div>
      
        <h1 className="w-7/12 flex mx-auto my-5 text-xs border-b border-b-slate-300 p-2">Over-Ear Audiophone Bluetooth Active Noice Cancelling
          Headphones
        </h1>
  
  <div className="w-7/12 flex text-xs mx-auto my-5 border-b border-b-slate-300 p-4">
<div>
  <h1>BILLING</h1>
  <h1>Billy Butcher</h1>
  <h1>1401 South Grand Avenue</h1>
  <h1>Los Langeles, CA 90015</h1>
  <h1>213 748-2411</h1>
</div>

<div>
  <h1>SHIPPING ADDRESS</h1>
  <h1>Billy Butcher</h1>
  <h1>1401 South Grand Avenue</h1>
  <h1>Los Langeles, CA 90015</h1>
  <h1>213 748-2411</h1>
</div>
  </div>

<div className="w-7/12 flex text-xs mx-auto my-5 border-b border-b-slate-300 p-4">
  <div>
  <h1>PRICE</h1>
  <h1 className="text-blue-700 text-2xl font-bold">US $499.95</h1>
  </div>
</div>
    </div>
    </div>
  );
}
