import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='h-[90vh] pt-[600px] sm:pt-[400px] md:pt-[300px] lg:pt-0 w-full flex flex-col justify-center items-center gap-10 bg-[#fff5f1] p-5' id='about'>
      <div className='flex flex-col gap-5 text-center'>
        <h1 className='text-[#fe4f2a] text-5xl font-medium'>About Us</h1>
        <p className='text-[#7f7f7f] max-w-5xl mx-auto'>
          At Shakti, we believe in the power of holistic fitness to elevate health and well-being. As a forward-thinking medical company, our focus is on empowering individuals to achieve their optimal fitness levels while enhancing overall health.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 lg:pb-0'>
        {[
          {
            title: 'Our Solution',
            description: 'Our solution leverages AI technology to enhance personalized health insights, optimizing fitness journeys for every individual.',
            imgSrc: 'https://img.icons8.com/?size=100&id=54517&format=png&color=fe4f2a',
          },
          {
            title: 'Our Aim',
            description: 'Our aim is to inspire and guide individuals toward healthier lifestyles through personalized fitness and wellness solutions.',
            imgSrc: 'https://img.icons8.com/?size=100&id=24921&format=png&color=fe4f2a',
          },
          {
            title: 'Our Team',
            description: 'Our team consists of dedicated fitness experts, nutritionists, and wellness advocates passionate about transforming lives through health.',
            imgSrc: 'https://img.icons8.com/?size=100&id=Kv2Y3rREoDGR&format=png&color=fe4f2a',
          },
        ].map((item, index) => (
          <div key={index} className='bg-white pl-6 pr-6 pt-10 pb-10 rounded-2xl shadow-md flex flex-col gap-4 max-w-sm hover:scale-105 transition-all'>
            <div className='flex items-center'>
              <Image src={item.imgSrc} alt="logo" width={40} height={60} className='w-8' />
              <h1 className='text-xl pl-2'>{item.title}</h1>
            </div>
            <p className='text-[#7f7f7f] max-w-sm text-md'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
