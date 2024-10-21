import React from 'react'
import Image from 'next/image'
import diet from '../images/diet.png'

const Services = () => {
  return (
        <div className='flex flex-col items-center justify-center pb-0 sm:pb-10 xl:pb-20 pt-[500px] sm:pt-[300px] md:pt-[200px] lg:pt-0' id='services'>
            <div className='text-center mb-10'>
                <h1 className='text-[#fe4f2a] text-5xl font-medium mb-6'>Our Expertise</h1>
                <p className='text-[#7f7f7f] max-w-sm sm:max-w-xl lg:max-w-5xl mx-auto'>At Shakti, we specialize in revolutionizing the fitness industry through cutting-edge AI technology. Our expertise lies in harnessing the power of artificial intelligence to deliver personalized fitness and health solutions.</p>
            </div>
            <div className='flex flex-row pl-5 pr-5 xl:pl-20 xl:pr-20'>
                <div className='overflow-hidden rounded-3xl'>
                <Image
                    src={diet}
                    alt="diet"
                    className="h-[30rem] w-[40rem] rounded-3xl hidden xl:flex transition-transform duration-300 transform hover:scale-110 object-cover"
                />
                </div>
                <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-20 pl-10 lg:pb-0'>
                    {[
                    {
                        title: 'Health Assistant',
                        description: 'AI-powered health assistant providing personalized care and wellness guidance.',
                        imgSrc: 'https://img.icons8.com/?size=100&id=41389&format=png&color=fe4f2a',
                    },
                    {
                        title: 'Gamefication',
                        description: 'Gamifying health through challenges and rewards to boost wellness engagement.',
                        imgSrc: 'https://img.icons8.com/?size=100&id=7314&format=png&color=fe4f2a',
                    },
                    {
                        title: 'Learning Hub',
                        description: 'Comprehensive platform offering diverse learning resources for skill development and knowledge.',
                        imgSrc: 'https://img.icons8.com/?size=100&id=42763&format=png&color=fe4f2a',
                    },
                    {
                        title: 'Cohort Support',
                        description: 'Collaborative group providing guidance, shared learning, and encouragement for growth.',
                        imgSrc: 'https://img.icons8.com/?size=100&id=122808&format=png&color=fe4f2a',
                    },
                    {
                        title: 'Rewards',
                        description: 'Recognition and incentives for achieving goals, fostering motivation and engagement.',
                        imgSrc: 'https://img.icons8.com/?size=100&id=24730&format=png&color=fe4f2a',
                    },
                    ].map((item, index) => (
                    <div key={index} className='bg-white pl-6 pr-6 pt-5 pb-5 rounded-2xl shadow-md flex flex-col gap-4 max-w-sm hover:scale-105 transition-all'>
                        <div className='flex items-center'>
                        <Image width={30} height={50} src={item.imgSrc} alt="logo" className='w-8'/>
                        <h1 className='text-xl pl-2'>{item.title}</h1>
                        </div>
                        <p className='text-[#7f7f7f] max-w-sm text-md'>{item.description}</p>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
  )
}

export default Services