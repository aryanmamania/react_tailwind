import React from 'react'
import single from '../assests/single.png';
import double from '../assests/double.png';
import triple from '../assests/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
       <img className='w-20 mx-auto mt-[-3 rem] bg-white' src={single} alt="single image" />
       <h2 className='text-2xl font-bold text-center py-8'>Single user </h2>
       <p className='text-center text-4xl font-bold'>$149</p>
       <div className='text-center font-medium'>
        <p classname= "py-2 border-b mx-8 mt-8"> 500 gb storage</p>
        <p classname= "py-2 border-b mx-8">1 gb granted</p>
        <p classname= "py-2 border-b mx-8">Send up to 2 GB</p>
       </div>
       <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>start trial</button>
        </div>

        <div className='w-full shadow-xl flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
       <img className='w-20 mx-auto mt-[-3 rem] bg-white' src={double} alt="single image" />
       <h2 className='text-2xl font-bold text-center py-8'>Single user </h2>
       <p className='text-center text-4xl font-bold'>$149</p>
       <div className='text-center font-medium'>
        <p classname= "py-2 border-b mx-8 mt-8"> 500 gb storage</p>
        <p classname= "py-2 border-b mx-8">1 gb granted</p>
        <p classname= "py-2 border-b mx-8">Send up to 2 GB</p>
       </div>
       <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>start trial</button>
        </div>

        <div className='w-full shadow-xl flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
       <img className='w-20 mx-auto mt-[-3 rem] bg-white' src={triple} alt="single image" />
       <h2 className='text-2xl font-bold text-center py-8'>Single user </h2>
       <p className='text-center text-4xl font-bold'>$149</p>
       <div className='text-center font-medium'>
        <p classname= "py-2 border-b mx-8 mt-8"> 500 gb storage</p>
        <p classname= "py-2 border-b mx-8">1 gb granted</p>
        <p classname= "py-2 border-b mx-8">Send up to 2 GB</p>
       </div>
       <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>start trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
