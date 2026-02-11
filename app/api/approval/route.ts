import { NextResponse } from "next/server";
import { inngest } from "@/app/inngest/client";

export async function POST(req: Request) {
  try {
    const { requestId, approved, reason } = await req.json();

    if (!requestId || typeof approved !== "boolean") {
      return NextResponse.json(
        { error: "requestId and approved (true/false) are required" },
        { status: 400 }
      );
    }

    await inngest.send({
      name: "workflow/approval",
      data: {
        requestId,
        approved,
        reason: reason || null,
      },
    });

    return NextResponse.json({
      success: true,
      message: approved
        ? "Request approved successfully"
        : "Request rejected successfully",
    });

  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
