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

            <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">Profile Information</h4>
                <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Username:</span>
                        {isEditing ? (
                            <input
                                type="text"
                                value={formData?.username || ''}
                                onChange={(e) => handleChange(e, 'username')}
                                className="p-2 border rounded w-2/3"
                            />
                        ) : (
                            <span>{data?.username}</span>
                        )}
                        <button onClick={isEditing ? handleSave : handleEditToggle} className="ml-2 text-blue-500">
                            <i className="fas fa-edit"></i>
                        </button>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="font-medium">Email:</span>
                        {isEditing ? (
                            <input
                                type="email"
                                value={formData?.email || ''}
                                onChange={(e) => handleChange(e, 'email')}
                                className="p-2 border rounded w-2/3"
                            />
                        ) : (
                            <span>{data?.email}</span>
                        )}
                        <button onClick={isEditing ? handleSave : handleEditToggle} className="ml-2 text-blue-500">
                            <i className="fas fa-edit"></i>
                        </button>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="font-medium">Height (cm):</span>
                        {isEditing ? (
                            <input
                                type="number"
                                value={formData?.healthParameters?.height || ''}
                                onChange={(e) => handleChange(e, 'healthParameters.height')}
                                className="p-2 border rounded w-2/3"
                            />
                        ) : (
                            <span>{data?.healthParameters?.height}</span>
                        )}
                        <button onClick={isEditing ? handleSave : handleEditToggle} className="ml-2 text-blue-500">
                            <i className="fas fa-edit"></i>
                        </button>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="font-medium">Weight (kg):</span>
                        {isEditing ? (
                            <input
                                type="number"
                                value={formData?.healthParameters?.weight || ''}
                                onChange={(e) => handleChange(e, 'healthParameters.weight')}
                                className="p-2 border rounded w-2/3"
                            />
                        ) : (
                            <span>{data?.healthParameters?.weight}</span>
                        )}
                        <button onClick={isEditing ? handleSave : handleEditToggle} className="ml-2 text-blue-500">
                            <i className="fas fa-edit"></i>
                        </button>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="font-medium">Dietary Preferences:</span>
                        {isEditing ? (
                            <textarea
                                value={formData?.dietaryPreferences.join(", ") || ''}
                                onChange={(e) => handleChange(e, 'dietaryPreferences')}
                                className="p-2 border rounded w-2/3"
                                rows={2}
                            />
                        ) : (
                            <span>{data?.dietaryPreferences.join(", ")}</span>
                        )}
                        <button onClick={isEditing ? handleSave : handleEditToggle} className="ml-2 text-blue-500">
                            <i className="fas fa-edit"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileContent;
