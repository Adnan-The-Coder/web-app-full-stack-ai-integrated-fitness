import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Plans = () => {
    return (
        <div className='h-full w-full flex flex-col items-center justify-center pb-10 pt-20' id='plans'>
            <div className='text-center flex flex-col gap-5'>
                <h1 className='text-[#fe4f2a] text-5xl font-medium'>Membership</h1>
                <p className='text-[#7f7f7f] max-w-sm md:max-w-3xl mx-auto'>With our dedicated resources and community support, we'll guide you step-by-step towards a healthier, happier lifestyle</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 pt-10 gap-10 items-center'>
                <div className='p-10 h-[460px] bg-[#ffffff] rounded-xl flex flex-col gap-4 hover:translate-y-[-5px] transition-all'>
                    <h3 className='text-[#7f7f7f] text-sm'>Basic</h3>
                    <div className='flex flex-row items-center'>
                        <h1 className='text-5xl text-red-950'>₹100</h1>
                        <h3 className=' text-red-950'>/month</h3>
                    </div>
                    <h1 className='text-[#fe4f2a]'>Basic Package</h1>
                    <hr className='border-[#7f7f7f]' />
                    <div className='flex flex-row gap-2'>
                        <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=fe4f2a" width={30} height={30} alt='tick-logo' className='lg:hidden xl:flex bg-[#fff5f1] rounded-full'/>
                        <h2 className='pb-1 pt-2 text-sm md:text-md'>Personalized Fitness Routine</h2>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=fe4f2a" width={30} height={30} alt='tick-logo' className='lg:hidden xl:flex bg-[#fff5f1] rounded-full'/>
                        <h2 className='pb-1 pt-2 text-sm md:text-md'>Two Customized Meal Plans</h2>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=fe4f2a" width={30} height={30} alt='tick-logo' className='lg:hidden xl:flex bg-[#fff5f1] rounded-full'/>
                        <h2 className='pb-1 pt-2 text-sm md:text-md'>Health insights with AI</h2>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=fe4f2a" width={30} height={30} alt='tick-logo' className='lg:hidden xl:flex bg-[#fff5f1] rounded-full'/>
                        <h2 className='pb-1 pt-2 text-sm md:text-md'>Community support events.</h2>
                    </div>
                </div>
                <div className='p-10 h-full bg-[#ffffff] rounded-xl flex flex-col gap-4 hover:translate-y-[-5px] transition-all'>
                    <h3 className='text-[#7f7f7f] text-sm'>Essential Care</h3>
                    <div className='flex flex-row items-center'>
                        <h1 className='text-5xl text-red-950'>₹500</h1>
                        <h3 className=' text-red-950'>/6month</h3>
                    </div>
                    <h1 className='text-[#fe4f2a]'>Essential Care Package</h1>
                    <hr className='border-[#7f7f7f]' />
                    <div className='flex flex-row gap-2'>
                        <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=fe4f2a" width={30} height={30} alt='tick-logo' className='lg:hidden xl:flex bg-[#fff5f1] rounded-full'/>
                        <h2 className='pb-1 pt-2 text-sm md:text-md'>Personalized Fitness Routine</h2>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=fe4f2a" width={30} height={30} alt='tick-logo' className='lg:hidden xl:flex bg-[#fff5f1] rounded-full'/>
                        <h2 className='pb-1 pt-2 text-sm md:text-md'>Four Customized Meal Plans</h2>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=fe4f2a" width={30} height={30} alt='tick-logo' className='lg:hidden xl:flex bg-[#fff5f1] rounded-full'/>
                        <h2 className='pb-1 pt-2 text-sm md:text-md'>Monthly Health Check-ins</h2>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=fe4f2a" width={30} height={30} alt='tick-logo' className='lg:hidden xl:flex bg-[#fff5f1] rounded-full'/>
                        <h2 className='pb-1 pt-2 text-sm md:text-md'>Exclusive webinars with experts</h2>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=fe4f2a" width={30} height={30} alt='tick-logo' className='lg:hidden xl:flex bg-[#fff5f1] rounded-full'/>
                        <h2 className='pb-1 pt-2 text-sm md:text-md'>Personalized Goal Setting</h2>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=fe4f2a" width={30} height={30} alt='tick-logo' className='lg:hidden xl:flex bg-[#fff5f1] rounded-full'/>
                        <h2 className='pb-1 pt-2 text-sm md:text-md'>Monthly Recipe Booklets</h2>
                    </div>
                </div>
                <div className='p-10 h-[460px] bg-[#ffffff] rounded-xl flex flex-col gap-4 hover:translate-y-[-5px] transition-all'>
                    <h3 className='text-[#7f7f7f] text-sm'>Premium</h3>
                    <div className='flex flex-row items-center'>
                        <h1 className='text-5xl text-red-950'>₹1,000</h1>
                        <h3 className=' text-red-950'>/Year</h3>
                    </div>
                    <h1 className='text-[#fe4f2a]'>Premium Support Package</h1>
                    <hr className='border-[#7f7f7f]' />
                    <div className='flex flex-row gap-2'>
                        <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=fe4f2a" width={30} height={30} alt='tick-logo' className='lg:hidden xl:flex bg-[#fff5f1] rounded-full'/>
                        <h2 className='pb-1 pt-2 text-sm md:text-md'>Personalized Fitness Routine</h2>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=fe4f2a" width={30} height={30} alt='tick-logo' className='lg:hidden xl:flex bg-[#fff5f1] rounded-full'/>
                        <h2 className='pb-1 pt-2 text-sm md:text-md'>Five Customized Meal Plans</h2>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=fe4f2a" width={30} height={30} alt='tick-logo' className='lg:hidden xl:flex bg-[#fff5f1] rounded-full'/>
                        <h2 className='pb-1 pt-2 text-sm md:text-md'>Personal Health Tracking App</h2>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=fe4f2a" width={30} height={30} alt='tick-logo' className='lg:hidden xl:flex bg-[#fff5f1] rounded-full'/>
                        <h2 className='pb-1 pt-2 text-sm md:text-md'>Monthly Expert Consultations</h2>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=fe4f2a" width={30} height={30} alt='tick-logo' className='lg:hidden xl:flex bg-[#fff5f1] rounded-full'/>
                        <h2 className='pb-1 pt-2 text-sm md:text-md'>Access to Premium Content</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans