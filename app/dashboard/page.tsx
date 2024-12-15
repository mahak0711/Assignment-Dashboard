import { Suspense } from 'react'
import { Card } from '@/components/ui/card'
import {  CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserGrowthChart } from '@/components/UserGrowthChart'
import { RevenueTrendChart } from '@/components/RevenueTrendChart'
import { EngagementMetricsChart } from '@/components/EngagementMetricsChart'
import { DataTable } from '@/components/DataTable'
import { Skeleton } from '@/components/ui/skeleton'
export default function DashboardSummary() {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>User Growth</CardTitle>
          <CardDescription>New user registrations over time</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
            <UserGrowthChart />
          </Suspense>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Revenue Trend</CardTitle>
          <CardDescription>Monthly revenue performance</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
            <RevenueTrendChart />
          </Suspense>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Engagement Metrics</CardTitle>
          <CardDescription>User activity and interaction rates</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
            <EngagementMetricsChart />
          </Suspense>
        </CardContent>
      </Card>
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest user actions and events</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
            <DataTable />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}

