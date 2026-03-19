import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface Lead {
  nombre: string
  email: string
  cargo: string
  empresa?: string
  desafio?: string
  source?: string
}

export async function saveLead(lead: Lead) {
  const { data, error } = await supabase
    .from('leads')
    .insert([{ ...lead, source: 'landing-page' }])
    .select()

  if (error) throw error
  return data
}
