import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function PUT(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request); // Get user ID from token
        const updatedData = await request.json(); // Parse the incoming JSON data

        // Find user and update their information
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
            new: true,         // Return the updated document
            runValidators: true // Run validation checks
        }).select("-password"); // Exclude password from the response

        if (!updatedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "User updated successfully", data: updatedUser });
    } catch (error: any) {
        console.error("Update error:", error); // Log the error for debugging
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
