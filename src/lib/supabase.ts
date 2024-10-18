import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function fetchLatestName(): Promise<string | null> {
  const { data, error } = await supabase
    .from('physio_plans')
    .select('name')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error) throw error
  return data?.name || null
}

export async function fetchLatestPhysioPlan(): Promise<string | null> {
  const { data, error } = await supabase
    .from('physio_plans')
    .select('physio_plan')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error) throw error
  return data?.physio_plan || null
}