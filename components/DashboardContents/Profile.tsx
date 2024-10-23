"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";


interface UserData {
    _id: string;
    username: string;
    email: string;
    isVerified: boolean; // Updated to use isVerified
    isAdmin: boolean;    // You can use this if needed
}



const Profile_content = () => {
    const [data, setData] = useState<UserData | null>(null);
    
    const getUserDetails = async () => {
        try {
            const res = await axios.get<{ data: UserData }>('/api/users/me');
            console.log("This is the response ",res)
            setData(res.data.data);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch user details");
        }
    };

    useEffect(()=>{
            getUserDetails();
    },[])

    return(

        <section className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-semibold text-gray-700 mb-4 md:mb-0">
          A
        </div>
        <div className="md:ml-6 text-center md:text-left">
          <h3 className="text-xl font-semibold">{data?.username}</h3>
          <p className="text-gray-600">{data?.email}</p>
          <p className="text-gray-600">{data?.isVerified}</p>
          <p className="text-gray-600">Height: 5'9"</p>
          <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded">Edit Profile</button>
        </div>
      </div>
    </section>
    );
  };
  


export default Profile_content;