/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";


connect();
export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const { userId, ...userData } = reqBody; // Extract userId and the rest of the data

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ message: "User not found", status: 404, success: false });
        }

        // Update the user data
        Object.assign(user, userData);

        // Save the updated user to the database
        await user.save();

        return NextResponse.json({ message: "User data updated successfully", status: 200, success: true });
    

        
    } catch (error:any) {
        return NextResponse.json({message:error.message,status:500,success:false})
    }
}