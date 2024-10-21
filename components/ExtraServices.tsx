import React, { useState } from 'react';
import Image from 'next/image';
import meal from '../images/meal.png';
import fitness from '../images/fitness.jpg';
import virtual from '../images/virtual.jpg';

const ExtraServices: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  const toggleOpen = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="container mx-auto p-5 sm:p-6 md:p-0 lg:p-20 pb-10">
      {/* Health and Fitness Plan */}
      <div className="border-t border-b py-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleOpen(1)}
        >
          <h2 className="text-xl sm:text-2xl">Health and Fitness Plan</h2>
          <p className="hidden lg:flex p-3 text-[#7f7f7f]">
            Holistic program focused on improving physical fitness, nutrition,<br /> mental well-being, and overall health management.
          </p>
          <span className="text-xl sm:text-2xl">{open === 1 ? '-' : '+'}</span>
        </div>
        <div
          className={`transition-all overflow-hidden ${
            open === 1 ? 'max-h-screen' : 'max-h-0'
          }`}
          style={{ transitionDuration: '0.5s' }}
        >
          <div className="mt-4 flex flex-col md:flex-row gap-4 bg-white rounded-xl p-4 sm:p-6 md:p-10">
            <div className="pr-0 md:pr-4">
              <Image
                src={fitness}
                alt="Meal Plan"
                className="w-full md:w-96 max-w-xs mx-auto mb-4 rounded-2xl"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl mb-4">Ftiness Plan</h1>
              <p className="text-gray-600 mb-4">
              Our comprehensive Health and Fitness Plan is designed to help you achieve optimal well-being through a balanced approach. It integrates personalized fitness routines, nutrition plans and mental wellness practices. 
              </p>
              <button className="mt-4 bg-[#fe4f2a] text-white px-4 py-2 rounded-lg">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Efficient Meal Plans */}
      <div className="border-t border-b py-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleOpen(2)}
        >
          <h2 className="text-xl sm:text-2xl">Efficient Meal Plans</h2>
          <p className="hidden lg:flex p-3 text-[#7f7f7f]">
            Customized meal plans designed to promote healthy eating,<br /> balanced nutrition, and support personal health goals.
          </p>
          <span className="text-xl sm:text-2xl">{open === 2 ? '-' : '+'}</span>
        </div>
        <div
          className={`transition-all overflow-hidden ${
            open === 2 ? 'max-h-screen' : 'max-h-0'
          }`}
          style={{ transitionDuration: '0.5s' }}
        >
          <div className="mt-4 flex flex-col md:flex-row gap-4 bg-white rounded-xl p-4 sm:p-6 md:p-10">
            <div className="pr-0 md:pr-4">
              <Image
                src={meal}
                alt="Meal Plan"
                className="w-full md:w-96 max-w-xs mx-auto mb-4 rounded-2xl"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl mb-4">Meal Plans</h1>
              <p className="text-gray-600 mb-4">
              Our tailored Meal Plans are designed to meet your unique dietary needs and health goals. Whether you're focused on weight management, muscle building, or simply eating healthier, portion control, and variety.
              </p>
              <button className="mt-4 bg-[#fe4f2a] text-white px-4 py-2 rounded-lg">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Consultations */}
      <div className="border-t border-b py-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleOpen(3)}
        >
          <h2 className="text-xl sm:text-2xl">Virtual Consultations</h2>
          <p className="hidden lg:flex p-3 text-[#7f7f7f]">
            Convenient online consultations providing expert advice,<br /> personalized care, and support for health and wellness needs.
          </p>
          <span className="text-xl sm:text-2xl">{open === 3 ? '-' : '+'}</span>
        </div>
        <div
          className={`transition-all overflow-hidden ${
            open === 3 ? 'max-h-screen' : 'max-h-0'
          }`}
          style={{ transitionDuration: '0.5s' }}
        >
          <div className="mt-4 flex flex-col md:flex-row gap-4 bg-white rounded-xl p-4 sm:p-6 md:p-10">
            <div className="pr-0 md:pr-4">
              <Image
                src={virtual}
                alt="Meal Plan"
                className="w-full md:w-96 max-w-xs mx-auto mb-4 rounded-2xl"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl mb-4">Virtual Consultations</h1>
              <p className="text-gray-600 mb-4">
              Get expert advice from the comfort of your home with our Virtual Consultations. Our professionals provide personalized guidance on fitness, nutrition, and wellness, tailored to your needs. 
              </p>
              <button className="mt-4 bg-[#fe4f2a] text-white px-4 py-2 rounded-lg">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;