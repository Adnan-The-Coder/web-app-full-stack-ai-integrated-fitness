import React from 'react';

const DashboardContent = () => (
  <section className="p-6">
    {/* Date Indicator and Search Bar */}
    <div className="flex justify-between items-center mb-4">
      <div className="text-xl font-bold">20th Daily Last 7 Days</div>
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded"
      />
    </div>

    {/* Tabs for Alerts, Goals, Filters */}
    <div className="mb-4">
      <ul className="flex space-x-4">
        <li className="cursor-pointer">Alerts</li>
        <li className="cursor-pointer">Goals</li>
        <li className="cursor-pointer">Filters</li>
      </ul>
    </div>

    {/* Main Statistics Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Exercise Time */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h3 className="text-xl">Exercise Time</h3>
        <p className="text-3xl font-bold">2 hrs 30 min</p>
        {/* Example Bar Chart Placeholder */}
        <div className="bg-gray-200 h-2 w-full mt-2 rounded">
          <div className="bg-blue-600 h-2 w-3/4 rounded"></div>
        </div>
        <span className="text-gray-500">Badminton Exercise</span>
      </div>

      {/* Activity Types */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h3 className="text-xl">Activity Types</h3>
        <ul>
          <li className="font-bold text-blue-600">Badminton</li>
          <li>Jogging</li>
          <li>Body Building</li>
          <li>Swimming</li>
        </ul>
        <div className="bg-gray-200 h-2 w-full mt-2 rounded">
          <div className="bg-green-600 h-2 w-3/5 rounded"></div>
        </div>
        <span className="text-gray-500">Progress: 60%</span>
      </div>

      {/* Steps */}
      <div className="bg-white p-5 rounded-lg shadow text-center">
        <h3 className="text-xl">Steps</h3>
        <p className="text-3xl font-bold">1,250</p>
      </div>

      {/* Calories Burned */}
      <div className="bg-white p-5 rounded-lg shadow text-center">
        <h3 className="text-xl">Calories Burned</h3>
        <p className="text-3xl font-bold">20%</p>
      </div>

      {/* Heart Rate */}
      <div className="bg-white p-5 rounded-lg shadow text-center">
        <h3 className="text-xl">Heart Rate</h3>
        <p className="text-3xl font-bold">90 bpm</p>
      </div>

      {/* Blood Pressure */}
      <div className="bg-white p-5 rounded-lg shadow text-center">
        <h3 className="text-xl">Blood Pressure</h3>
        <p className="text-3xl font-bold">105/90</p>
      </div>
    </div>

    {/* Right-Side Panel */}
    <div className="mt-6">
      <h3 className="text-xl font-bold">Sleep Periodic</h3>
      {/* Example Sleep Graph Placeholder */}
      <div className="bg-gray-200 h-40 rounded mt-2"></div>
      <p className="text-red-500">Sleep Irregularity Detected!</p>

      <h3 className="text-xl font-bold mt-4">AI Suggestions</h3>
      <p>Pillow Improvement: Consider changing your pillows for better sleep quality.</p>

      <h3 className="text-xl font-bold mt-4">Consultations</h3>
      <p>Scheduled Consultation: 21 Nov, Monday 08am - 09am</p>
    </div>
  </section>
);

export default DashboardContent;