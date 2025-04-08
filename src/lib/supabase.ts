
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

// Helper function to authenticate a user
export const authenticateUser = async (username: string, password: string): Promise<User | null> => {
  try {
    // First, fetch the user by username
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .single();
    
    if (error || !data) {
      console.error('User not found:', error);
      return null;
    }
    
    // Now, verify password using a Supabase RPC function that does bcrypt comparison
    const { data: verified, error: verifyError } = await supabase
      .rpc('verify_password', {
        user_id: data.id,
        password_to_check: password
      });
    
    if (verifyError || !verified) {
      console.error('Password verification failed:', verifyError);
      return null;
    }
    
    return data as User;
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
};

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
