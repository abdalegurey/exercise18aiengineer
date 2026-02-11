import { NextResponse } from "next/server";
import { inngest } from "@/app/inngest/client";

export async function POST(req: Request) {
  try {
    const { requestId, action } = await req.json();

    if (!requestId || !action) {
      return NextResponse.json(
        { error: "requestId and action are required" },
        { status: 400 }
      );
    }

    await inngest.send({
      name: "workflow/start",
      data: {
        requestId,
        action,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Workflow started successfully",
    });

  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
