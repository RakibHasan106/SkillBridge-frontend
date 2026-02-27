"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminReviewsPage() {
  const reviews = [
    {
      id: 1,
      student: "John Doe",
      tutor: "Sarah Johnson",
      subject: "Mathematics",
      rating: 5,
      comment: "Excellent tutor! Very clear explanations.",
      date: "2026-02-20",
      status: "approved"
    },
    {
      id: 2,
      student: "Mike Chen",
      tutor: "Mike Chen",
      subject: "English",
      rating: 4,
      comment: "Good session, helpful feedback.",
      date: "2026-02-18",
      status: "approved"
    },
    {
      id: 3,
      student: "Alex Brown",
      tutor: "Emma Wilson",
      subject: "Physics",
      rating: 3,
      comment: "Average session, could be better.",
      date: "2026-02-21",
      status: "pending"
    },
    {
      id: 4,
      student: "Emma Wilson",
      tutor: "John Doe",
      subject: "Chemistry",
      rating: 2,
      comment: "Inappropriate behavior reported.",
      date: "2026-02-22",
      status: "flagged"
    }
  ]

  const getRatingStars = (rating) => "⭐".repeat(rating)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reviews Management</h1>
        <p className="text-gray-500">Moderate and manage all reviews</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Total Reviews</p>
              <p className="text-2xl font-bold">248</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Pending Approval</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Flagged Reviews</p>
              <p className="text-2xl font-bold">5</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reviews</CardTitle>
          <CardDescription>Latest reviews from students and tutors</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Tutor</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reviews.map((review) => (
                <TableRow key={review.id}>
                  <TableCell>{review.student}</TableCell>
                  <TableCell>{review.tutor}</TableCell>
                  <TableCell>{review.subject}</TableCell>
                  <TableCell>{getRatingStars(review.rating)}</TableCell>
                  <TableCell>{review.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        review.status === "approved"
                          ? "default"
                          : review.status === "pending"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {review.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">View</Button>
                    {review.status !== "approved" && (
                      <Button variant="default" size="sm" className="mr-2">Approve</Button>
                    )}
                    <Button variant="destructive" size="sm">Reject</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}