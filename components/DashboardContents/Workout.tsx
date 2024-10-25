import Image from "next/image";
import React from "react";

const Workout = () => {
  return (
    <div className="w-full h-full p-4 lg:p-8 bg-white">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">Workout</h1>

      {/* Main Content Section - Flex Layout */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left - Progress Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Progress Section */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Progress</h2>

            {/* Virtual AI Trainer Section */}
            <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="text-3xl">🤖</div>
                <div>
                  <h3 className="text-lg font-semibold">Virtual AI Trainer</h3>
                  <p className="text-sm text-gray-500">Your personal AI to guide your workouts</p>
                </div>
              </div>
              {/* Button to Initiate AI Trainer */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
                Initiate AI Trainer
              </button>
            </div>

            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-600">Calories</h3>
                <p className="text-2xl font-bold text-gray-800">1,024</p>
                <p className="text-sm text-gray-400">Kcal this week</p>
              </div>
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-600">Weight</h3>
                <p className="text-2xl font-bold text-gray-800">75.2</p>
                <p className="text-sm text-gray-400">Kg this week</p>
              </div>
            </div>

            {/* Workout Chart */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">Workout</h4>
                <p className="text-sm text-gray-500">Week</p>
              </div>
              <div className="flex items-center justify-between mt-2 space-x-1">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="h-24 flex items-end justify-center">
                      <div
                        className={`w-8 rounded-t bg-red-500 h-${index % 2 === 0 ? 16 : 10}`}
                        style={{ height: `${(index + 1) * 10}px` }} // Dynamic height for each bar
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">{day}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* My Plan Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">My Plan</h3>
            <div className="flex space-x-4">
              <div className="flex-1 bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-4xl">🏋️</div>
                <p className="font-medium mt-2">Workout</p>
                <p className="text-sm text-gray-500">2 hours</p>
              </div>
              <div className="flex-1 bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-4xl">🏃‍♂️</div>
                <p className="font-medium mt-2">Running</p>
                <p className="text-sm text-gray-500">24 KM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Workout Programs Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 space-y-4">
          <h2 className="text-xl font-semibold">More Workout Programs For You</h2>

          {[
            {
              title: "Weight Loss",
              description: "Combines cardio and strength training to burn calories and reduce body fat.",
              bgColor: "bg-pink-50",
              image: "/fitness-logo.png", // Replace with actual image link
            },
            {
              title: "Bodybuilding",
              description: "Focuses on hypertrophy to increase muscle size.",
              bgColor: "bg-blue-50",
              image: "/fitness-logo.png", // Replace with actual image link
            },
            {
              title: "Endurance Training & Yoga",
              description:
                "Enhances cardiovascular and muscular endurance, often through prolonged activities.",
              bgColor: "bg-yellow-50",
              image: "/fitness-logo.png", // Replace with actual image link
            },
            {
              title: "Strength Training",
              description: "Aims to improve maximal strength through heavy lifting.",
              bgColor: "bg-indigo-50",
              image: "/fitness-logo.png", // Replace with actual image link
            },
            {
              title: "Flexibility & Mobility Training",
              description:
                "Improves range of motion and reduces injury risk through stretching and mobility exercises.",
              bgColor: "bg-green-50",
              image: "/fitness-logo.png", // Replace with actual image link
            },
          ].map((program, index) => (
            <div key={index} className={`flex items-center p-4 rounded-lg shadow ${program.bgColor}`}>
              <Image
                width={30}
                height={40}
                src={program.image}
                alt={program.title}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold">{program.title}</h4>
                <p className="text-sm text-gray-600">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workout;
