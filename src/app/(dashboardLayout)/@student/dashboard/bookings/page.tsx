"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StudentBookingsPage() {
  const upcomingBookings = [
    {
      id: 1,
      tutorName: "John Smith",
      subject: "Mathematics",
      date: "2026-03-05",
      time: "3:00 PM",
      status: "confirmed"
    },
    {
      id: 2,
      tutorName: "Sarah Johnson",
      subject: "English",
      date: "2026-03-07",
      time: "4:30 PM",
      status: "confirmed"
    }
  ]

  const pastBookings = [
    {
      id: 3,
      tutorName: "Mike Chen",
      subject: "Physics",
      date: "2026-02-20",
      time: "2:00 PM",
      status: "completed"
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Bookings</h1>
        <p className="text-gray-500">View and manage your tutoring sessions</p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past Sessions</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingBookings.map((booking) => (
            <Card key={booking.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <h3 className="font-semibold">{booking.tutorName}</h3>
                    <p className="text-sm text-gray-500">{booking.subject}</p>
                    <p className="text-sm text-gray-500">{booking.date} at {booking.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="default">{booking.status}</Badge>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          {pastBookings.map((booking) => (
            <Card key={booking.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <h3 className="font-semibold">{booking.tutorName}</h3>
                    <p className="text-sm text-gray-500">{booking.subject}</p>
                    <p className="text-sm text-gray-500">{booking.date} at {booking.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{booking.status}</Badge>
                    <Button variant="outline">Leave Review</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}