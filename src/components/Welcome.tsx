"use client";

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchLatestName } from '@/lib/supabase'

export function Welcome() {
  const [name, setName] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function getName() {
      try {
        const fetchedName = await fetchLatestName()
        setName(fetchedName)
      } catch (err) {
        console.error(err);
        setError('Failed to fetch name. Please try again later.')
      }
    }
    getName()
  }, [])

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          Welcome, {name ? name : 'Valued Patient'}!
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg">
            We&apos;re excited to present your personalized physiotherapy care plan.
        </p>
      </CardContent>
    </Card>
  )
}