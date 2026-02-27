"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function TutorBookingsPage() {
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [showReschedule, setShowReschedule] = useState(false)

  const upcomingBookings = [
    {
      id: 1,
      studentName: "John Doe",
      subject: "Mathematics",
      date: "2026-03-05",
      time: "3:00 PM",
      duration: "1 hour",
      status: "confirmed",
      studentEmail: "john@example.com"
    },
    {
      id: 2,
      studentName: "Emma Wilson",
      subject: "Physics",
      date: "2026-03-07",
      time: "4:30 PM",
      duration: "1.5 hours",
      status: "confirmed",
      studentEmail: "emma@example.com"
    },
    {
      id: 3,
      studentName: "Mike Chen",
      subject: "Mathematics",
      date: "2026-03-08",
      time: "2:00 PM",
      duration: "1 hour",
      status: "pending",
      studentEmail: "mike@example.com"
    }
  ]

  const completedBookings = [
    {
      id: 4,
      studentName: "Alex Brown",
      subject: "Physics",
      date: "2026-02-20",
      time: "2:00 PM",
      duration: "1 hour",
      status: "completed",
      studentEmail: "alex@example.com"
    },
    {
      id: 5,
      studentName: "Lisa Park",
      subject: "Mathematics",
      date: "2026-02-18",
      time: "3:30 PM",
      duration: "1 hour",
      status: "completed",
      studentEmail: "lisa@example.com"
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Bookings</h1>
        <p className="text-gray-500">Manage your tutoring sessions</p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming ({upcomingBookings.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedBookings.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingBookings.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-gray-500">No upcoming bookings</p>
              </CardContent>
            </Card>
          ) : (
            upcomingBookings.map((booking) => (
              <Card key={booking.id}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{booking.studentName}</h3>
                        <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                          {booking.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Subject</p>
                          <p className="font-medium">{booking.subject}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Date & Time</p>
                          <p className="font-medium">{booking.date} at {booking.time}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Duration</p>
                          <p className="font-medium">{booking.duration}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Student Email</p>
                          <p className="font-medium">{booking.studentEmail}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="default">Start Session</Button>
                      <Button variant="outline" onClick={() => { setSelectedBooking(booking); setShowReschedule(true); }}>
                        Reschedule
                      </Button>
                      <Button variant="destructive">Cancel</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}

          {showReschedule && selectedBooking && (
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle>Reschedule Session</CardTitle>
                <CardDescription>Reschedule with {selectedBooking.studentName}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="newDate">New Date</Label>
                    <Input id="newDate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newTime">New Time</Label>
                    <Input id="newTime" type="time" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reason">Reason (optional)</Label>
                  <Textarea id="reason" placeholder="Explain why you need to reschedule..." rows={3} />
                </div>
                <div className="flex gap-2">
                  <Button>Send Reschedule Request</Button>
                  <Button variant="outline" onClick={() => setShowReschedule(false)}>Cancel</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedBookings.map((booking) => (
            <Card key={booking.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-3 flex-1">
                    <h3 className="text-lg font-semibold">{booking.studentName}</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Subject</p>
                        <p className="font-medium">{booking.subject}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Date & Time</p>
                        <p className="font-medium">{booking.date} at {booking.time}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Duration</p>
                        <p className="font-medium">{booking.duration}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="secondary">{booking.status}</Badge>
                    <Button variant="outline">View Session</Button>
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