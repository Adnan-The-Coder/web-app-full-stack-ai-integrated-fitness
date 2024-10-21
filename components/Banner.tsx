import React from 'react'

const Banner = () => {
  return (
    <div className='h-full w-full flex items-center justify-center flex-col p-5 bg-[#fe4f2a]'>
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-20 sm:gap-28 items-center justify-between'>
            <div className='lg:flex hidden flex-row items-center justify-center gap-3'>
                <img src="https://img.icons8.com/?size=100&id=clCu8sTHeQ0i&format=png&color=000000" alt="" className='w-10'/>
                <h1 className='text-white lg:text-md xl:text-xl text-center font-semibold'>Empirical</h1>
            </div>
            <div className='lg:flex hidden flex-row items-center justify-center gap-3'>
                <img src="https://img.icons8.com/?size=100&id=2802&format=png&color=FFFFFF" alt="" className='w-8'/>
                <h1 className='text-white lg:text-md xl:text-xl text-center font-semibold'>Pioneering</h1>
            </div>
            <div className='flex flex-row items-center justify-center gap-3'>
                <img src="https://img.icons8.com/?size=100&id=37628&format=png&color=FFFFFF" alt="" className='w-10'/>
                <h1 className='text-white lg:text-md xl:text-xl text-center font-semibold'>Robust</h1>
            </div>
            <div className='flex flex-row items-center justify-center gap-3'>
                <img src="https://img.icons8.com/?size=100&id=20891&format=png&color=FFFFFF" alt="" className='w-8'/>
                <h1 className='text-white lg:text-md xl:text-xl text-center font-semibold'>Accurate</h1>
            </div>
        </div>
    </div>
  )
}

export default Banner