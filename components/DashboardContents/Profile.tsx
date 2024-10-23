"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface UserData {
    _id: string;
    username: string;
    email: string;
    isVerified: boolean;
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

const ProfileContent = () => {
    const [data, setData] = useState<UserData | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<UserData | null>(null);

    const getUserDetails = async () => {
        try {
            const res = await axios.get<{ data: UserData }>('/api/users/me');
            const userData: UserData = {
                ...res.data.data,
                dietaryPreferences: res.data.data.dietaryPreferences || [],
                healthParameters: res.data.data.healthParameters || {},
            };
            setData(userData);
            setFormData(userData);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch user details");
        }
    };

    useEffect(() => {
        getUserDetails();
    }, []);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        if (field === 'dietaryPreferences') {
            const preferences = e.target.value.split(",").map(item => item.trim());
            setFormData(prev => prev ? {
                ...prev,
                dietaryPreferences: preferences,
            } : null);
        } else if (field.includes('healthParameters.')) {
            const key = field.split('.')[1]; // Get the key after healthParameters
            setFormData(prev => prev ? {
                ...prev,
                healthParameters: {
                    ...prev.healthParameters,
                    [key]: e.target.value ? parseFloat(e.target.value) : undefined, // Convert to number
                },
            } : null);
        } else {
            setFormData(prev => prev ? {
                ...prev,
                [field]: e.target.value,
            } : null);
        }
    };

    const handleSave = async () => {
        if (!formData) return; // Ensure formData is not null
        try {
            await axios.put('/api/users/updateInfo', formData);
            toast.success("Profile updated successfully!");
            setData(formData);
            setIsEditing(false);
        } catch (error) {
            console.error(error);
            toast.error("Failed to update profile");
        }
    };

    return (
        <section className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-semibold text-gray-700 mb-4 md:mb-0">
                    A
                </div>
                <div className="md:ml-6 text-center md:text-left">
                    <h3 className="text-xl font-semibold">{data?.username}</h3>
                    <p className="text-gray-600">{data?.email}</p>
                    <p className="text-gray-600">{data?.isVerified ? "Verified" : "Not Verified"}</p>
                    <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded" onClick={handleEditToggle}>
                        {isEditing ? "Cancel" : "Edit Profile"}
                    </button>
                </div>
            </div>

            {isEditing && (
                <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-2">Edit Profile Information</h4>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            placeholder="Username"
                            value={formData?.username || ''}
                            onChange={(e) => handleChange(e, 'username')}
                            className="mb-2 p-2 border rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={formData?.email || ''}
                            onChange={(e) => handleChange(e, 'email')}
                            className="mb-2 p-2 border rounded"
                        />
                        <input
                            type="number"
                            placeholder="Height (cm)"
                            value={formData?.healthParameters?.height || ''}
                            onChange={(e) => handleChange(e, 'healthParameters.height')}
                            className="mb-2 p-2 border rounded"
                        />
                        <input
                            type="number"
                            placeholder="Weight (kg)"
                            value={formData?.healthParameters?.weight || ''}
                            onChange={(e) => handleChange(e, 'healthParameters.weight')}
                            className="mb-2 p-2 border rounded"
                        />
                        <textarea
                            placeholder="Dietary Preferences (comma separated)"
                            value={formData?.dietaryPreferences.join(", ") || ''}
                            onChange={(e) => handleChange(e, 'dietaryPreferences')}
                            className="mb-2 p-2 border rounded"
                        />
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={handleSave}>
                            Save Changes
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProfileContent;
