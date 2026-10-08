import { createClient } from '@supabase/supabase-js';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const createServerSupabaseClient = () => {
  const supabaseUrl = process.env.SUPABASE_URL || '';
  const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY || '';

  return createClient(supabaseUrl, supabaseKey);
};

export const createAdminSupabaseClient = async () => {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_PUBLISHABLE_KEY || '',
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (error) {
            // Ignored if called from a Server Component
          }
        },
      },
    }
  );
};
