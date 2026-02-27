"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Rating } from "@/components/rating"
import { useState } from "react"

export default function StudentReviewsPage() {
  const [isWriting, setIsWriting] = useState(false)
  const [rating, setRating] = useState(5)

  const myReviews = [
    {
      id: 1,
      tutorName: "John Smith",
      subject: "Mathematics",
      rating: 5,
      comment: "Excellent tutor! Very clear explanations.",
      date: "2026-02-20"
    },
    {
      id: 2,
      tutorName: "Sarah Johnson",
      subject: "English",
      rating: 4,
      comment: "Great session, very helpful.",
      date: "2026-02-15"
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Reviews</h1>
        <p className="text-gray-500">Write and manage your reviews</p>
      </div>

      {isWriting && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle>Write a Review</CardTitle>
            <CardDescription>Share your experience with your tutor</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Rating</label>
              <Rating value={rating} onChange={setRating} />
            </div>
            <Textarea placeholder="Share your feedback..." rows={4} />
            <div className="flex gap-2">
              <Button>Submit Review</Button>
              <Button variant="outline" onClick={() => setIsWriting(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {!isWriting && (
        <Button onClick={() => setIsWriting(true)}>Write a Review</Button>
      )}

      <div className="space-y-4">
        {myReviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{review.tutorName}</h3>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-sm text-gray-500">{review.subject}</p>
                <div className="flex gap-1">
                  {"⭐".repeat(review.rating)}
                </div>
                <p className="text-sm">{review.comment}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}