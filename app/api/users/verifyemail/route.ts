import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { WelcomeEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
    
    try {
        const reqBody = await request.json();
        const {token } = reqBody;
        console.log("token  is ", token);
        
        // Find the user with the provided token
        const user = await User.findOne({
            verifyToken: token,
            verifyTokenExpiry: { $gt: Date.now() },
        });
        console.log(user);
        if (!user) {
            return NextResponse.json({ error: "Invalid Token" }, { status: 400 });
        }

        // Verify the user and clear the token
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();

        // send Welcome Email
        console.log("sending Welcome Email")
        await WelcomeEmail({email:user.email, userId:user._id});
        console.log("Welcome Email Sent")

        return NextResponse.json({ message: "Email Verified successfully", success: true });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
