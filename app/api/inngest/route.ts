// app/api/inngest/route.ts
import { serve } from "inngest/next";
import { inngest } from "../../inngest/client";
import { approvalWorkflow, dataProcessor, emailSender } from "@/app/inngest/functions/functions";
// We'll add functions here as we create them

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    // Functions will be added here
    dataProcessor,
    emailSender,
    approvalWorkflow

  ],
});
