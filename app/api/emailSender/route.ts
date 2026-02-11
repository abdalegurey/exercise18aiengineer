// app/api/users/register/route.ts
import { NextResponse } from "next/server";
import { inngest } from "@/app/inngest/client";

export async function POST(req: Request) {
  const { emails} :{emails: string[] }= await req.json();

  if(!Array.isArray(emails)){
     return NextResponse.json(
      { error: "name must be an array" },
      { status: 400 }
    );

  }


  const emailsUSERS=emails.map((n,index)=>({
    id:`user-${index}+1`,
   email: n,

  })
  )
//   // create users (example)
//   const users = name.map((n, index) => ({
//     id: `user-${index + 1}`,
//     name: n,
//   }));

  // Create user (your business logic)
  //const user = { id: "user-123",  name };

  // Send event to trigger multiple functions
  await inngest.send({
    name: "email/send",
    data: {
        emails
    
    },
  });

  return NextResponse.json({ success: true,emailsUSERS});
}
