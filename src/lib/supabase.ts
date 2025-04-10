
import { createClient } from '@supabase/supabase-js';
import * as bcrypt from 'bcryptjs';

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

// Helper function to verify password using bcryptjs
export const verifyPassword = async (hashedPassword: string, plainPassword: string): Promise<boolean> => {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    console.error('Password verification error:', error);
    return false;
  }
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
    
    // Now, verify password using bcrypt
    const isPasswordValid = await verifyPassword(data.password, password);
    
    if (!isPasswordValid) {
      console.error('Password verification failed');
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
