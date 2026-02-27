"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function AdminTutorProfilesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const tutors = [
    {
      id: 1,
      name: "Sarah Johnson",
      subjects: ["Mathematics", "Physics"],
      rating: 4.8,
      hourlyRate: "$45/hr",
      reviews: 156,
      students: 42,
      status: "verified"
    },
    {
      id: 2,
      name: "Emma Wilson",
      subjects: ["English", "History"],
      rating: 4.6,
      hourlyRate: "$40/hr",
      reviews: 98,
      students: 28,
      status: "verified"
    },
    {
      id: 3,
      name: "David Lee",
      subjects: ["Chemistry", "Biology"],
      rating: 4.9,
      hourlyRate: "$50/hr",
      reviews: 203,
      students: 55,
      status: "verified"
    },
    {
      id: 4,
      name: "Lisa Chen",
      subjects: ["Computer Science"],
      rating: 4.7,
      hourlyRate: "$55/hr",
      reviews: 142,
      students: 35,
      status: "pending"
    }
  ]

  const filteredTutors = tutors.filter(tutor =>
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tutor Profiles</h1>
        <p className="text-gray-500">Manage and verify tutor profiles</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Tutors</CardTitle>
          <CardDescription>Filter by tutor name</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Search tutors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {filteredTutors.map((tutor) => (
          <Card key={tutor.id}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold">{tutor.name}</h3>
                    <Badge variant={tutor.status === "verified" ? "default" : "secondary"}>
                      {tutor.status}
                    </Badge>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <span className="text-gray-500">
                      Subjects: {tutor.subjects.join(", ")}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Rating</p>
                      <p className="font-semibold">{tutor.rating} ⭐</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Rate</p>
                      <p className="font-semibold">{tutor.hourlyRate}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Reviews</p>
                      <p className="font-semibold">{tutor.reviews}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Students</p>
                      <p className="font-semibold">{tutor.students}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline">View Profile</Button>
                  {tutor.status === "pending" && (
                    <>
                      <Button>Verify</Button>
                      <Button variant="destructive">Reject</Button>
                    </>
                  )}
                  <Button variant="destructive">Suspend</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}