import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wjjsdhpkuoeufkaeeynv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqanNkaHBrdW9ldWZrYWVleW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NDg1NjYsImV4cCI6MjA2ODEyNDU2Nn0.q8N4RNI9vOSHmSR4alybU1ZIhcMuEUJ9whOKkzKbzqU';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
