import { Suspense } from 'react'
import { Welcome } from '@/components/Welcome'
import { CarePlan } from '@/components/CarePlan'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Skeleton } from "@/components/ui/skeleton"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Suspense fallback={<Skeleton className="w-[250px] h-[20px] rounded-full" />}>
          <Welcome />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-[300px] rounded-xl" />}>
          <CarePlan />
        </Suspense>
        {/* Additional sections can be added here */}
      </main>
      <Footer />
    </div>
  )
}