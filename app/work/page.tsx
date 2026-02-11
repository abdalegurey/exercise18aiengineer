"use client";


import { useState } from "react";
import { useApprovalWorkflow, useStartWorkflow } from "../hooks/useWorkflow";

export default function WorkflowDemo() {
  const [requestId] = useState("123");
  const [action] = useState("delete-user");

  const startMutation = useStartWorkflow();
  const approvalMutation = useApprovalWorkflow();




  return (
    <div className="space-y-4 p-6">
      {/* Start Button */}
      <button
        onClick={() => startMutation.mutate({ requestId, action })}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {startMutation.isPending ? "Starting..." : "Start Workflow"}
      </button>

      {/* Approve Button */}
      <button
        onClick={() =>
          approvalMutation.mutate({ requestId, approved: true })
        }
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        {approvalMutation.isPending ? "Processing..." : "Approve"}
      </button>

      {/* Reject Button */}
      <button
        onClick={() =>
          approvalMutation.mutate({ requestId, approved: false })
        }
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Reject
      </button>

      {/* Status Messages */}
      {startMutation.isSuccess && (
        <p className="text-green-600">Workflow Started ✅</p>
      )}

      {approvalMutation.isSuccess && (
        <p className="text-purple-600">Approval Sent ✅</p>
      )}

      {startMutation.isError && (
        <p className="text-red-600">Start Failed ❌</p>
      )}

      {approvalMutation.isError && (
        <p className="text-red-600">Approval Failed ❌</p>
      )}
    </div>
  );
}
