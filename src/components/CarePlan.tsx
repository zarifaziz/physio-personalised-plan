"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchLatestPhysioPlan } from '@/lib/supabase'
import ReactMarkdown from 'react-markdown'

export function CarePlan() {
  const [plan, setPlan] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function getPlan() {
      try {
        const fetchedPlan = await fetchLatestPhysioPlan()
        setPlan(fetchedPlan)
      } catch (err) {
        console.error(err);
        setError('Failed to fetch care plan. Please try again later.')
      }
    }
    getPlan()
  }, [])

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Your Personalized Care Plan</CardTitle>
      </CardHeader>
      <CardContent>
        {plan ? (
          <ReactMarkdown className="prose max-w-none">
            {plan}
          </ReactMarkdown>
        ) : (
          <p>Loading your care plan...</p>
        )}
      </CardContent>
    </Card>
  )
}