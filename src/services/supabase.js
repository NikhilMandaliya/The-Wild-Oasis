import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://qugomuiqmcbgvnxozjfg.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Z29tdWlxbWNiZ3ZueG96amZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyODA5OTUsImV4cCI6MjAxNDg1Njk5NX0.xL5qxR9qW_HDv1jEYws0GBrVNtxjoAQNy5etLgzO_p8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
