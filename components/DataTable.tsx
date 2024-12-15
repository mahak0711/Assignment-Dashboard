'use client'

import { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type DataItem = {
  id: number
  date: string
  users: number
  revenue: number
  region: string
}

export function DataTable({ sortBy = 'date', filterRegion = 'all' }) {
  const [data, setData] = useState<DataItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const response = await fetch(`/api/analytics?sortBy=${sortBy}&filterRegion=${filterRegion}`)
      const result = await response.json()
      setData(result)
      setLoading(false)
    }
    fetchData()
  }, [sortBy, filterRegion])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Users</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead>Region</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.users}</TableCell>
            <TableCell>${item.revenue.toFixed(2)}</TableCell>
            <TableCell>{item.region}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

