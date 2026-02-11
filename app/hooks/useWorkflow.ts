"use client";

import { useMutation } from "@tanstack/react-query";
import { sendworkflowstart, sendworkflowapproval } from "@/lib/api"; // halka aad ku qortay functions-ka

// Start Workflow
export function useStartWorkflow() {
  return useMutation({
    mutationFn: ({
      requestId,
      action,
    }: {
      requestId: string;
      action: string;
    }) => sendworkflowstart(requestId, action),
  });
}

// Approve / Reject Workflow
export function useApprovalWorkflow() {
  return useMutation({
    mutationFn: ({
      requestId,
      approved,
    }: {
      requestId: string;
      approved: boolean;
    }) => sendworkflowapproval(requestId, approved),
  });
}
