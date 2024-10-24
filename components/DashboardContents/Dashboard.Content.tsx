import React, { useState } from 'react';

const DashboardContent = () => {
  const [activeTab, setActiveTab] = useState('Exercise');

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      {/* Date Indicator and Search Bar */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-xl font-bold text-gray-800">Daily Last 8 Days</div>
        <input
          type="text"
          placeholder="Search something..."
          className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Tabs for Exercise and Daily Habit */}
      <div className="mb-8">
        <ul className="flex space-x-4 text-gray-500 text-sm">
          <li 
            className={`cursor-pointer ${activeTab === 'Exercise' ? 'border-b-4 border-purple-500 text-purple-500 font-semibold' : ''}`} 
            onClick={() => setActiveTab('Exercise')}
          >
            Exercise
          </li>
          <li 
            className={`cursor-pointer ${activeTab === 'Daily Habit' ? 'border-b-4 border-purple-500 text-purple-500 font-semibold' : ''}`} 
            onClick={() => setActiveTab('Daily Habit')}
          >
            Daily Habit
          </li>
        </ul>
      </div>

      {/* Main Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeTab === 'Exercise' && (
          <>
            {/* Exercise Time */}
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <h3 className="text-xl text-gray-700 font-semibold">Exercise Time</h3>
              <p className="text-3xl font-bold text-red-500 mt-4">2 hrs 30 min</p>
              {/* Example Bar Chart */}
              <div className="mt-4">
                <div className="h-32 flex space-x-1">
                  <div className="bg-gray-200 w-1/6 h-full"></div>
                  <div className="bg-gray-200 w-1/6 h-3/5"></div>
                  <div className="bg-gray-200 w-1/6 h-4/5"></div>
                  <div className="bg-red-400 w-1/6 h-full"></div>
                  <div className="bg-gray-200 w-1/6 h-2/4"></div>
                  <div className="bg-gray-200 w-1/6 h-3/4"></div>
                </div>
              </div>
              <span className="text-gray-400 block mt-4">Weekly</span>
            </div>

            {/* Running Info */}
            <div className="bg-white p-5 rounded-lg shadow-lg relative flex flex-col justify-between">
              <div>
                <h3 className="text-sm text-gray-500 mb-2">Run at Lapang Cicooreog</h3>
                <p className="text-gray-500 text-xs mb-4">20 July 2023</p>
                <div className="flex justify-between text-center text-gray-600 mb-4">
                  <div>
                    <p className="font-bold text-lg">256</p>
                    <p className="text-xs">Calories</p>
                  </div>
                  <div>
                    <p className="font-bold text-lg">65</p>
                    <p className="text-xs">Heart Rate</p>
                  </div>
                  <div>
                    <p className="font-bold text-lg">1,054</p>
                    <p className="text-xs">Steps</p>
                  </div>
                </div>
              </div>
              <div className="text-center text-orange-500">
                <p className="text-xs">Time: 03:20:12</p>
                <p className="text-xs">20 KM</p>
              </div>
            </div>

            {/* Real Time Monitoring */}
            <div className="bg-white p-5 rounded-lg shadow-lg text-center">
              <h3 className="text-xl text-gray-700 font-semibold">Real Time Monitoring</h3>
              <p className="text-3xl font-bold text-red-500 mt-4">Off</p>
            </div>

            {/* Calories Burned */}
            <div className="bg-white p-5 rounded-lg shadow-lg text-center">
              <h3 className="text-xl text-gray-700 font-semibold">Calories Burned</h3>
              <p className="text-3xl font-bold text-purple-500 mt-4">20%</p>
            </div>
          </>
        )}

        {activeTab === 'Daily Habit' && (
          <>
            {/* Home Workouts */}
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <h3 className="text-xl text-gray-700 font-semibold">Home Workouts</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex justify-between items-center">
                  <p>Plank</p>
                  <span className="text-gray-400">30 Minutes</span>
                </li>
                <li className="flex justify-between items-center">
                  <p>Squats</p>
                  <span className="text-gray-400">20x</span>
                </li>
                <li className="flex justify-between items-center">
                  <p>Push Ups</p>
                  <span className="text-gray-400">10x</span>
                </li>
                <li className="flex justify-between items-center">
                  <p>Sit Ups</p>
                  <span className="text-gray-400">40x</span>
                </li>
                <li className="flex justify-between items-center">
                  <p>Jumping</p>
                  <span className="text-gray-400">40x</span>
                </li>
              </ul>
            </div>

            {/* Popular Classes */}
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <h3 className="text-xl text-gray-700 font-semibold">Popular Classes</h3>
              <div className="flex items-center mt-4">
                <div className="w-16 h-16 bg-yellow-200 rounded-full flex justify-center items-center">
                  {/* Placeholder for Icon */}
                  <span className="text-2xl">🚴‍♀️</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-700">Cycling Sport</h4>
                  <p className="text-gray-500 text-sm">Cycling helps burn calories and increases metabolism.</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default DashboardContent;
