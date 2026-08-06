import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://btbdasehtcqffyoscgzp.supabase.co';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0YmRhc2VodGNxZmZ5b3NjZ3pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5ODY2OTQsImV4cCI6MjA1NTU2MjY5NH0.Yz10xEXTbLYvdtvMyx4sWKSLZDZE7nC21AVImgo0Pzc';

/** Cliente anon solo para usos públicos. No consultar tablas cerradas (eventos/galeriaEmpresa). */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
