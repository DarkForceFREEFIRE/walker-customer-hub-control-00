
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cdznhvtwqxizvpglwrgs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkem5odnR3cXhpenZwZ2x3cmdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5NzUyMDMsImV4cCI6MjA1ODU1MTIwM30.7cSZp065mmICnUDfLE1zFaMYHr0zjPhdb--lluowcA';

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
