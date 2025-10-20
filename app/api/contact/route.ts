import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log the message to console (in production, this would send an email or save to a database)
    console.log("===== New Contact Form Submission =====");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log("=======================================");

    // TODO: In production, integrate with an email service (SendGrid, Resend, etc.)
    // Example:
    // await sendEmail({
    //   to: 'your.email@example.com',
    //   from: 'noreply@yourwebsite.com',
    //   subject: `New contact from ${name}`,
    //   text: message,
    //   replyTo: email,
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}

