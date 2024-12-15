import Link from 'next/link'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        </div>
        <ul className="space-y-2 p-4">
          <li>
            <Link href="/dashboard" className="block p-2 hover:bg-gray-200 rounded">
              Summary
            </Link>
          </li>
          <li>
            <Link href="/dashboard/history" className="block p-2 hover:bg-gray-200 rounded">
              History
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-8 overflow-auto">
        <Tabs defaultValue="daily" className="mb-8">
          <TabsList>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
        </Tabs>
        {children}
      </main>
    </div>
  )
}

