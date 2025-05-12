import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Home, Settings, Shield, User } from "lucide-react"
import ConsentSummaryButton from "@/components/consent-summary-button"
import ThirdPartyAppsList from "@/components/third-party-apps-list"
import RecommendationsList from "@/components/recommendations-list"
import ChatAssistant from "@/components/chat-assistant"

export default function ConsentDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold text-blue-600">FDX Smart Consent Manager</span>
            </div>
            <nav className="hidden md:flex md:gap-6">
              <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600">
                <Home className="h-4 w-4" />
                Home
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-medium text-blue-600">
                <CreditCard className="h-4 w-4" />
                Dashboard
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600">
                <Settings className="h-4 w-4" />
                Consent Settings
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
              <span className="sr-only">User account</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Consent Dashboard</h1>
            <p className="mt-2 text-gray-500">Manage your data-sharing consents and get AI-powered assistance</p>
          </div>

          {/* Two-panel layout */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left panel - Consent Settings */}
            <div className="lg:col-span-2 space-y-8">
              {/* Summary Card */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Consent Summary</CardTitle>
                  <CardDescription>Overview of your data-sharing consents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border bg-white p-4 shadow-sm">
                      <div className="text-sm font-medium text-gray-500">Active Consents</div>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-2xl font-bold text-blue-600">3</span>
                        <Badge variant="outline" className="bg-blue-50 text-blue-600">
                          Active
                        </Badge>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-white p-4 shadow-sm">
                      <div className="text-sm font-medium text-gray-500">Pending Review</div>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-2xl font-bold text-amber-600">1</span>
                        <Badge variant="outline" className="bg-amber-50 text-amber-600">
                          Pending
                        </Badge>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-white p-4 shadow-sm">
                      <div className="text-sm font-medium text-gray-500">Recommendations</div>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-2xl font-bold text-green-600">2</span>
                        <Badge variant="outline" className="bg-green-50 text-green-600">
                          Available
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <ConsentSummaryButton />
                </CardFooter>
              </Card>

              {/* Main Consent Panel */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Manage Your Consents</CardTitle>
                  <CardDescription>View and control third-party access to your financial data</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="apps">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="apps">Third-Party Apps</TabsTrigger>
                      <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                    </TabsList>
                    <TabsContent value="apps" className="mt-4">
                      <ThirdPartyAppsList />
                    </TabsContent>
                    <TabsContent value="recommendations" className="mt-4">
                      <RecommendationsList />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Right panel - Chat Assistant */}
            <div className="lg:col-span-1">
              <ChatAssistant />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white shadow-sm">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
          <p className="text-sm text-gray-500">© 2025 FDX Smart Consent Manager. All rights reserved.</p>
          <nav className="flex gap-4">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Terms of Use
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Support
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
