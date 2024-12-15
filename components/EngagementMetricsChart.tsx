'use client'

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "Jan 1", activeUsers: 200, interactions: 1000 },
  { date: "Jan 15", activeUsers: 300, interactions: 1500 },
  { date: "Feb 1", activeUsers: 400, interactions: 2000 },
  { date: "Feb 15", activeUsers: 500, interactions: 2500 },
  { date: "Mar 1", activeUsers: 600, interactions: 3000 },
  { date: "Mar 15", activeUsers: 700, interactions: 3500 },
  { date: "Apr 1", activeUsers: 800, interactions: 4000 },
]

export function EngagementMetricsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="activeUsers" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="interactions" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

