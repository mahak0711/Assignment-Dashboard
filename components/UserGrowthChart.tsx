'use client'

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "Jan 1", users: 400 },
  { date: "Jan 15", users: 600 },
  { date: "Feb 1", users: 800 },
  { date: "Feb 15", users: 1000 },
  { date: "Mar 1", users: 1200 },
  { date: "Mar 15", users: 1400 },
  { date: "Apr 1", users: 1600 },
]

export function UserGrowthChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

