import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility function to merge Tailwind CSS classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Types for request/response to MCP backend
export interface McpRequest {
  userId: string
  context: string
  query: string
  accountIds: string[]
}

export interface McpResponse {
  answer: string
}

// Function to call the backend MCP Assistant endpoint
export async function callConsentAssistant(req: McpRequest): Promise<McpResponse> {
  const res = await fetch("http://localhost:8080/api/mcp/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  })

  if (!res.ok) {
    throw new Error("Failed to fetch response from backend")
  }

  return res.json()
}
