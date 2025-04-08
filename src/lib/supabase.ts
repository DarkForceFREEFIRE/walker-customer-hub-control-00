
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cdznhvtwqxizvpglwrgs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkem5odnR3cXhpenZwZ2x3cmdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5NzUyMDMsImV4cCI6MjA1ODU1MTIwM30.7cSZJp065mmICnUDfLE1zFaMYHr0zjPhdb--lluowcA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for Supabase tables
export type User = {
  id: number;
  username: string;
  password: string;
  subscription_status: string;
  is_banned: boolean;
  hwid: string;
  ip_address: string;
  created_at: string;
  updated_at: string;
  last_login: string;
  hwid_resets_used: number;
  max_hwid_resets: number;
  is_tester: boolean;
};

export type ProductSafetyStatus = {
  id: number;
  product_name: string;
  status: string;
  last_updated: string;
};

// Note: For a proper implementation, you need to create a Postgres function in Supabase
// that can compare bcrypt password with the stored hash
/*
-- Example SQL to create the verify_password function in Supabase
create or replace function verify_password(user_id int, password_to_check text)
returns boolean as $$
declare
  stored_hash text;
begin
  -- Get the stored hashed password for the user
  select password into stored_hash from users where id = user_id;
  
  -- Check if the password matches using pgcrypto extension
  return crypt(password_to_check, stored_hash) = stored_hash;
end;
$$ language plpgsql security definer;
*/

// Helper function to get user by ID
export const getUserById = async (userId: number): Promise<User | null> => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();
  
  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }
  
  return data as User;
};
