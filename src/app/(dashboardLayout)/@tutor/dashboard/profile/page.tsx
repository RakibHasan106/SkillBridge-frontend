"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function TutorProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const tutorInfo = {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1-555-0123",
    bio: "Experienced mathematics and physics tutor with 5+ years of experience.",
    subjects: ["Mathematics", "Physics"],
    qualifications: "B.Sc. Mathematics, M.Sc. Physics",
    experience: "5+ years",
    hourlyRate: 45,
    rating: 4.8,
    totalReviews: 156,
    totalStudents: 42,
    responseTime: "< 1 hour"
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
        <p className="text-gray-500">Manage your tutor profile and information</p>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList>
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="subjects">Subjects & Rate</TabsTrigger>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
        </TabsList>

        {/* Basic Information Tab */}
        <TabsContent value="basic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Sarah" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Johnson" disabled={!isEditing} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="sarah@example.com" disabled />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+1-555-0123" disabled={!isEditing} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Professional Bio</Label>
                <Textarea id="bio" placeholder="Tell students about yourself" disabled={!isEditing} rows={4} value={tutorInfo.bio} />
              </div>

              <Button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Save Changes" : "Edit Profile"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Subjects & Rate Tab */}
        <TabsContent value="subjects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subjects & Expertise</CardTitle>
              <CardDescription>Manage your subjects and hourly rate</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Subjects You Teach</Label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tutorInfo.subjects.map((subject, index) => (
                    <Badge key={index} variant="default">
                      {subject}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline">Add Subject</Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rate">Hourly Rate ($)</Label>
                <Input id="rate" type="number" placeholder="45" disabled={!isEditing} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="qualifications">Qualifications</Label>
                <Textarea id="qualifications" placeholder="Your degrees and certifications" disabled={!isEditing} rows={3} value={tutorInfo.qualifications} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Input id="experience" placeholder="5+" disabled={!isEditing} />
              </div>

              <Button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Save Changes" : "Edit Information"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Statistics Tab */}
        <TabsContent value="statistics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">Rating</p>
                  <p className="text-2xl font-bold">{tutorInfo.rating} ⭐</p>
                  <p className="text-sm text-gray-500">({tutorInfo.totalReviews} reviews)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">Total Students</p>
                  <p className="text-2xl font-bold">{tutorInfo.totalStudents}</p>
                  <p className="text-sm text-gray-500">Active & Past</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">Response Time</p>
                  <p className="text-2xl font-bold">{tutorInfo.responseTime}</p>
                  <p className="text-sm text-gray-500">Average</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}