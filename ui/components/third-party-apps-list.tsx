import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { ChevronRight } from "lucide-react"

const apps = [
  {
    id: 1,
    name: "Plaid",
    description: "Financial data aggregation",
    status: "Active",
    lastAccessed: "Today",
    accessLevel: "Full account access",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Mint",
    description: "Personal finance management",
    status: "Active",
    lastAccessed: "3 months ago",
    accessLevel: "Transaction history only",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Credit Karma",
    description: "Credit score monitoring",
    status: "Active",
    lastAccessed: "2 weeks ago",
    accessLevel: "Limited access",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Robinhood",
    description: "Investment platform",
    status: "Inactive",
    lastAccessed: "6 months ago",
    accessLevel: "Revoked",
    logo: "/placeholder.svg?height=40&width=40",
  },
]

export default function ThirdPartyAppsList() {
  return (
    <div className="space-y-4">
      {apps.map((app) => (
        <div
          key={app.id}
          className="flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm transition-colors hover:bg-gray-50"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <img src={app.logo || "/placeholder.svg"} alt={`${app.name} logo`} className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{app.name}</h3>
                {app.status === "Active" ? (
                  <Badge variant="outline" className="bg-green-50 text-green-600">
                    Active
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-gray-100 text-gray-500">
                    Inactive
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-500">{app.description}</p>
              <p className="mt-1 text-xs text-gray-400">
                Last accessed: {app.lastAccessed} • {app.accessLevel}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Switch checked={app.status === "Active"} disabled={app.status === "Inactive"} />
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      ))}
    </div>
  )
}
