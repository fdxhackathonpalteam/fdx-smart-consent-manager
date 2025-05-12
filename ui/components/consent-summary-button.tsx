"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ConsentSummaryButton() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [summary, setSummary] = useState("")

  const handleGetSummary = async () => {
    setLoading(true)
    // Simulate API call to get AI-generated summary
    setTimeout(() => {
      setSummary(
        "You currently have 3 active data-sharing consents with financial applications. Plaid has access to your transaction history and account balances. Mint has access to your spending patterns but hasn't been used in 3 months. Credit Karma has limited access to your credit score information only.",
      )
      setLoading(false)
      setOpen(true)
    }, 1500)
  }

  return (
    <>
      <Button className="w-full" onClick={handleGetSummary} disabled={loading}>
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Generating...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Get Consent Summary
          </span>
        )}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>AI-Generated Consent Summary</DialogTitle>
            <DialogDescription>Here's an overview of your current data-sharing consents</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-sm text-gray-700">{summary}</p>
          </div>
          <div className="flex justify-end">
            <Button onClick={() => setOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
