import React from 'react';
import { FaRunning, FaDumbbell } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-5 flex flex-col">
        <div className="text-2xl font-bold mb-8">Shakti.io</div>
        <nav className="flex-grow">
          <ul className="space-y-6">
            <li>Dashboard</li>
            <li>Your Data</li>
            <li>Profile</li>
            <li className="text-orange-500">Workout Plan</li>
            <li>Personal Health Assistant</li>
            <li>Meal Plans</li>
            <li>Community Support</li>
            <li>Learning Hub</li>
            <li>Virtual Consultations</li>
            <li>Announcement Avenue</li>
          </ul>
        </nav>
        <div className="mt-auto space-y-3">
          <button className="bg-orange-500 text-white py-2 px-4 w-full rounded">Settings</button>
          <button className="bg-orange-500 text-white py-2 px-4 w-full rounded">Log Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        {/* Progress Section */}
        <section className="mb-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Progress</h2>
            <div className="space-x-2">
              <button className="py-2 px-4 bg-orange-500 text-white rounded">Daily</button>
              <button className="py-2 px-4 bg-gray-300 rounded">Calendar</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg shadow text-center">
              <h3 className="text-xl">Calories</h3>
              <p className="text-3xl font-bold">1,024 Kcal</p>
              <span className="text-gray-500">This week</span>
            </div>
            <div className="bg-white p-5 rounded-lg shadow text-center">
              <h3 className="text-xl">Weight</h3>
              <p className="text-3xl font-bold">75.2 Kg</p>
              <span className="text-gray-500">This week</span>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Workout</h3>
            <div className="flex space-x-4 mt-4">
              {/* Mock workout chart */}
              <div className="flex-1 text-center bg-gray-200 h-20">Sun</div>
              <div className="flex-1 text-center bg-gray-200 h-40">Mon</div>
              <div className="flex-1 text-center bg-orange-500 text-white h-60">Tue</div>
              <div className="flex-1 text-center bg-gray-200 h-32">Wed</div>
              <div className="flex-1 text-center bg-gray-200 h-48">Thu</div>
              <div className="flex-1 text-center bg-gray-200 h-40">Fri</div>
              <div className="flex-1 text-center bg-gray-200 h-32">Sat</div>
            </div>
          </div>
        </section>

        {/* My Plan Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold">My Plan</h2>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg shadow flex items-center justify-center space-x-4">
              <FaDumbbell size={30} />
              <div className="text-center">
                <p className="text-xl">Workout</p>
                <span className="text-gray-500">2 hours</span>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow flex items-center justify-center space-x-4">
              <FaRunning size={30} />
              <div className="text-center">
                <p className="text-xl">Running</p>
                <span className="text-gray-500">24 KM</span>
              </div>
            </div>
          </div>
        </section>

        {/* More Workout Programs */}
        <section>
          <h2 className="text-2xl font-bold">More Workout Programs For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            <div className="bg-orange-100 p-5 rounded-lg shadow">
              <h3 className="text-xl font-bold">Weight Loss</h3>
              <p className="text-gray-700 mt-2">Combines cardio and strength training to burn calories and reduce body fat.</p>
            </div>
            <div className="bg-blue-100 p-5 rounded-lg shadow">
              <h3 className="text-xl font-bold">Bodybuilding</h3>
              <p className="text-gray-700 mt-2">Focuses on hypertrophy to increase muscle size.</p>
            </div>
            <div className="bg-green-100 p-5 rounded-lg shadow">
              <h3 className="text-xl font-bold">Endurance Training & Yoga</h3>
              <p className="text-gray-700 mt-2">Enhances cardiovascular and muscular endurance, often through prolonged activities.</p>
            </div>
            <div className="bg-purple-100 p-5 rounded-lg shadow">
              <h3 className="text-xl font-bold">Strength Training</h3>
              <p className="text-gray-700 mt-2">Aims to improve maximal strength through heavy lifting.</p>
            </div>
            <div className="bg-pink-100 p-5 rounded-lg shadow">
              <h3 className="text-xl font-bold">Flexibility & Mobility Training</h3>
              <p className="text-gray-700 mt-2">Improves range of motion and reduces injury risk through stretching and mobility exercises.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
