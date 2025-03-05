import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://twdrlypkuggrlkbtbkik.supabase.co"; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3ZHJseXBrdWdncmxrYnRia2lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExODMyODEsImV4cCI6MjA1Njc1OTI4MX0.tTz5lwbgyNZdaVY5L6u2ovATe_5va1xf5jw_b-s8rtY"; // Replace with your Supabase API key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
