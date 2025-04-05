import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zychyawklsujjhnasabn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5Y2h5YXdrbHN1ampobmFzYWJuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0Mzg1MTg4OSwiZXhwIjoyMDU5NDI3ODg5fQ.NMSv3wDW8UdUxa1rtGn0tXr4nigpwLRr-JALHUwyPAI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
