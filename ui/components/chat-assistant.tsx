"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"

export default function ChatAssistant() {
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const handleAsk = async () => {
    if (!query.trim()) {
      setResponse("Please enter a valid query.")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("http://localhost:8080/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }), // must match backend param
      })

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`)
      }

      const data = await res.json()
      setResponse(data.answer || "No response received from the server.")
    } catch (error) {
      console.error("Error:", error)
      setResponse("Error contacting the server. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Ask Consent Assistant</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question like 'Why is this data being shared?'"
        />
        <Button onClick={handleAsk} disabled={loading}>
          {loading ? "Thinking..." : "Ask"}
        </Button>
        {response && (
          <div className="mt-2 rounded-md border bg-gray-50 p-3 text-sm text-gray-800">
            <strong>Response:</strong> {response}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
