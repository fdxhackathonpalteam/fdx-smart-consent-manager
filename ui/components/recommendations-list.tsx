import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle, Shield, Lock } from "lucide-react"

const recommendations = [
  {
    id: 1,
    title: "Revoke unused access to Mint",
    description: "Mint hasn't accessed your data in 3 months. Consider revoking access for better security.",
    type: "security",
  },
  {
    id: 2,
    title: "Limit Credit Karma permissions",
    description: "Credit Karma only needs access to your credit score information, not your transaction history.",
    type: "privacy",
  },
]

export default function RecommendationsList() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-blue-50 p-4">
        <div className="flex items-start gap-4">
          <div className="mt-0.5">
            <AlertCircle className="h-5 w-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-blue-800">AI-Powered Recommendations</h3>
            <p className="text-sm text-blue-700">
              Based on your consent patterns, we've identified opportunities to enhance your data privacy and security.
            </p>
          </div>
        </div>
      </div>

      {recommendations.map((recommendation) => (
        <div
          key={recommendation.id}
          className="rounded-lg border bg-white p-4 shadow-sm transition-colors hover:bg-gray-50"
        >
          <div className="flex items-start gap-4">
            <div className="mt-0.5">
              {recommendation.type === "security" ? (
                <Shield className="h-5 w-5 text-amber-500" />
              ) : (
                <Lock className="h-5 w-5 text-blue-600" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{recommendation.title}</h3>
              <p className="text-sm text-gray-500">{recommendation.description}</p>
              <div className="mt-4 flex gap-2">
                <Button size="sm" variant="default">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Accept
                </Button>
                <Button size="sm" variant="outline">
                  Customize
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
