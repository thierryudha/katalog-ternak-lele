import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL?.replace('/rest/v1/', '') || '';
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

