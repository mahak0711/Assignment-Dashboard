import { NextResponse } from 'next/server'

const mockData = [
  { id: 1, date: '2023-04-01', users: 1000, revenue: 5000, region: 'North America' },
  { id: 2, date: '2023-04-02', users: 1200, revenue: 6000, region: 'Europe' },
  { id: 3, date: '2023-04-03', users: 1100, revenue: 5500, region: 'Asia' },
  { id: 4, date: '2023-04-04', users: 1300, revenue: 6500, region: 'North America' },
  { id: 5, date: '2023-04-05', users: 1400, revenue: 7000, region: 'Europe' },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const sortBy = searchParams.get('sortBy') || 'date'
  const filterRegion = searchParams.get('filterRegion') || 'all'

  let filteredData = [...mockData]

  if (filterRegion !== 'all') {
    filteredData = filteredData.filter(item => item.region.toLowerCase().replace(' ', '') === filterRegion)
  }

  filteredData.sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (sortBy === 'users') {
      return b.users - a.users
    } else if (sortBy === 'revenue') {
      return b.revenue - a.revenue
    }
    return 0
  })

  return NextResponse.json(filteredData)
}

