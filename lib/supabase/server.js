import { createClient } from '@supabase/supabase-js';

export const createServerSupabaseClient = () => {
  const supabaseUrl = process.env.SUPABASE_URL || '';
  const supabaseKey = process.env.SUPABASE_SECRET_KEY || '';

  return createClient(supabaseUrl, supabaseKey);
};

