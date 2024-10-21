"use client";
import React, { useState } from 'react';
import { FaDumbbell, FaRunning, FaUser, FaHeartbeat, FaUtensils, FaComments, FaBook, FaVideo, FaBullhorn, FaChartLine } from 'react-icons/fa';

const Sidebar = ({ setSelectedSection }:any) => {
  return (
    <aside className="w-64 bg-gray-100 p-5 flex flex-col">
      <div className="text-2xl font-bold mb-8">Shakti.io</div>
      <nav className="flex-grow">
        <ul className="space-y-6">
          <li>
            <button onClick={() => setSelectedSection('dashboard')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaChartLine /> <span>Dashboard</span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedSection('your-data')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaUser /> <span>Your Data</span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedSection('profile')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaUser /> <span>Profile</span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedSection('workout-plan')} className="flex items-center space-x-2 text-orange-500">
              <FaDumbbell /> <span>Workout Plan</span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedSection('health-assistant')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaHeartbeat /> <span>Personal Health Assistant</span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedSection('meal-plans')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaUtensils /> <span>Meal Plans</span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedSection('community-support')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaComments /> <span>Community Support</span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedSection('learning-hub')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaBook /> <span>Learning Hub</span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedSection('virtual-consultations')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaVideo /> <span>Virtual Consultations</span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedSection('announcement')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaBullhorn /> <span>Announcement Avenue</span>
            </button>
          </li>
        </ul>
      </nav>
      <div className="mt-auto space-y-3">
        <button className="bg-orange-500 text-white py-2 px-4 w-full rounded">Settings</button>
        <button className="bg-orange-500 text-white py-2 px-4 w-full rounded">Log Out</button>
      </div>
    </aside>
  );
};

const DashboardContent = () => (
  <section>
    <h2 className="text-2xl font-bold">Progress</h2>
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
    {/* More content as required */}
  </section>
);

const WorkoutPlan = () => (
  <section>
    <h2 className="text-2xl font-bold">Workout Plan</h2>
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
);

// Other content components for each section can be created similarly

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState('dashboard');

  const renderContent = () => {
    switch (selectedSection) {
      case 'dashboard':
        return <DashboardContent />;
      case 'your-data':
        return <div>Your Data Content</div>;
      case 'profile':
        return <div>Profile Content</div>;
      case 'workout-plan':
        return <WorkoutPlan />;
      case 'health-assistant':
        return <div>Health Assistant Content</div>;
      case 'meal-plans':
        return <div>Meal Plans Content</div>;
      case 'community-support':
        return <div>Community Support Content</div>;
      case 'learning-hub':
        return <div>Learning Hub Content</div>;
      case 'virtual-consultations':
        return <div>Virtual Consultations Content</div>;
      case 'announcement':
        return <div>Announcement Content</div>;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar setSelectedSection={setSelectedSection} />
      <main className="flex-1 p-6 bg-gray-50">{renderContent()}</main>
    </div>
  );
};

export default Dashboard;
