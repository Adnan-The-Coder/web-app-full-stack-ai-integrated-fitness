/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaDumbbell, FaUser, FaHeartbeat, FaUtensils, FaComments, FaBook, FaVideo, FaBullhorn, FaChartLine, FaBars, FaTimes } from 'react-icons/fa';
import DashboardContent from '@/components/DashboardContents/Dashboard.Content';
import Profile_content from '@/components/DashboardContents/Profile';
import { useEffect } from 'react';
import Workout from '@/components/DashboardContents/Workout';

interface SidebarProps {
  setSelectedSection: (section: string) => void;
  isOpen: boolean;
  toggleMenu: () => void;
}

interface UserData {
  _id: string;
  username: string;
  email: string;
  isVerified: boolean;
  age?: number; // Optional age
  gender?: string; // Optional gender
  dietaryPreferences: string[];
  healthParameters: {
      height?: number;
      weight?: number;
      bloodPressure?: {
          systolic?: number;
          diastolic?: number;
      };
      allergies?: string[];
  };
}

const Sidebar: React.FC<SidebarProps> = ({ setSelectedSection, isOpen, toggleMenu }) => {
  const [data, setData] = useState<UserData | null>(null);
  const router = useRouter();
  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
    if (isOpen) toggleMenu(); // Close the menu if it's open
  };

  const getUserDetails = async () => {
    try {
        const res = await axios.get<{ data: UserData }>('/api/users/me');
        const userData: UserData = {
            ...res.data.data,
            dietaryPreferences: res.data.data.dietaryPreferences || [],
            healthParameters: res.data.data.healthParameters || {},
        };
        setData(userData);
    } catch (error) {
        console.error(error);
        toast.error("Failed to fetch user details");
    }
};

  useEffect(() => {
    getUserDetails();
  }, []);

  const logout = async () => {
      try {
          await axios.get('/api/users/logout');
          toast.success("Logout Successful");
          router.push('/login');
      } catch (error: unknown) {
          console.error(error);
          toast.error("Logout failed");
      }
    };

  return (
    <aside className={`fixed h-screen inset-0 bg-gray-100 p-5 flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50 md:static md:translate-x-0 md:w-64`}>
      <div className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold">Shakti.io</div>
        <button onClick={toggleMenu}>
          <FaTimes size={24} className="text-gray-700 md:hidden" />
        </button>
      </div>
      <nav className="flex-grow overflow-y-auto">
        <ul className="space-y-6">
          <li>
            <button onClick={() => handleSectionChange('dashboard')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaChartLine /> <span>Dashboard</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('profile')} className="flex items-center space-x-2 text-orange-500">
              <FaUser /> <span>Profile</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('workout-plan')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaDumbbell /> <span>Workout Plan</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('health-assistant')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaHeartbeat /> <span>Personal Health Assistant</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('meal-plans')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaUtensils /> <span>Meal Plans</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('community-support')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaComments /> <span>Community Support</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('learning-hub')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaBook /> <span>Learning Hub</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('virtual-consultations')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaVideo /> <span>Virtual Consultations</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('announcement')} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaBullhorn /> <span>Announcement Avenue</span>
            </button>
          </li>
        </ul>
      </nav>
      <div className="mt-6 space-y-3"> {/* Added mt-6 for spacing */}
        <button className="bg-orange-500 text-white py-2 px-4 w-full rounded">Settings</button>
        <button className="bg-orange-500 text-white py-2 px-4 w-full rounded" onClick={logout}>Log Out</button>
      </div>
    </aside>
  );
};

// Profile Component


const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState('profile');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'dashboard':
        return <div><DashboardContent/></div>;
      case 'profile':
        return <Profile_content/>;
      case 'workout-plan':
        return <Workout/>
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
        return <Profile_content/>;
    }
  };

  return (
    <div className="relative min-h-screen overflow-y-hidden">
      {/* Mobile Hamburger Icon */}
      <button onClick={toggleMenu} className="absolute top-5 right-5 z-50 md:hidden">
        <FaBars size={24} className="text-gray-700" />
      </button>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu} />}

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar for Mobile and Desktop */}
        <Sidebar setSelectedSection={setSelectedSection} isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        
        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50 md:ml-34">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
