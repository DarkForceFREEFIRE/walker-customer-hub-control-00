export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      activity_logs: {
        Row: {
          action_type: string
          created_at: string
          description: string
          id: string
          ip_address: unknown | null
          user_agent: string | null
          user_id: number | null
        }
        Insert: {
          action_type: string
          created_at?: string
          description: string
          id?: string
          ip_address?: unknown | null
          user_agent?: string | null
          user_id?: number | null
        }
        Update: {
          action_type?: string
          created_at?: string
          description?: string
          id?: string
          ip_address?: unknown | null
          user_agent?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "activity_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      admins: {
        Row: {
          created_at: string | null
          email: string
          id: number
          user_id: number | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: number
          user_id?: number | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: number
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "admins_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      aimbot_config: {
        Row: {
          id: number
          teammate_bytes: string
          updated_at: string | null
        }
        Insert: {
          id?: number
          teammate_bytes: string
          updated_at?: string | null
        }
        Update: {
          id?: number
          teammate_bytes?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      app_usage: {
        Row: {
          architecture: string | null
          daily_count: number | null
          device_id: string | null
          id: number
          ip_address: string | null
          last_daily_reset: string | null
          last_monthly_reset: string | null
          last_open: string | null
          last_weekly_reset: string | null
          machine: string | null
          monthly_count: number | null
          node: string | null
          open_count: number | null
          platform: string | null
          processor: string | null
          release: string | null
          system: string | null
          version: string | null
          weekly_count: number | null
        }
        Insert: {
          architecture?: string | null
          daily_count?: number | null
          device_id?: string | null
          id?: number
          ip_address?: string | null
          last_daily_reset?: string | null
          last_monthly_reset?: string | null
          last_open?: string | null
          last_weekly_reset?: string | null
          machine?: string | null
          monthly_count?: number | null
          node?: string | null
          open_count?: number | null
          platform?: string | null
          processor?: string | null
          release?: string | null
          system?: string | null
          version?: string | null
          weekly_count?: number | null
        }
        Update: {
          architecture?: string | null
          daily_count?: number | null
          device_id?: string | null
          id?: number
          ip_address?: string | null
          last_daily_reset?: string | null
          last_monthly_reset?: string | null
          last_open?: string | null
          last_weekly_reset?: string | null
          machine?: string | null
          monthly_count?: number | null
          node?: string | null
          open_count?: number | null
          platform?: string | null
          processor?: string | null
          release?: string | null
          system?: string | null
          version?: string | null
          weekly_count?: number | null
        }
        Relationships: []
      }
      applications: {
        Row: {
          app_name: string
          created_at: string | null
          enabled: boolean | null
          id: number
          secret: string
          version: string
        }
        Insert: {
          app_name: string
          created_at?: string | null
          enabled?: boolean | null
          id?: number
          secret: string
          version: string
        }
        Update: {
          app_name?: string
          created_at?: string | null
          enabled?: boolean | null
          id?: number
          secret?: string
          version?: string
        }
        Relationships: []
      }
      bypass_whitelist: {
        Row: {
          created_at: string
          created_by: number | null
          id: string
          note: string | null
          uid: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: number | null
          id?: string
          note?: string | null
          uid: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: number | null
          id?: string
          note?: string | null
          uid?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bypass_whitelist_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      download_items: {
        Row: {
          created_at: string
          description: string | null
          display_order: number | null
          download_url: string | null
          file_size: string | null
          icon_name: string | null
          id: number
          item_id: string
          last_updated: string | null
          title: string | null
          version: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          download_url?: string | null
          file_size?: string | null
          icon_name?: string | null
          id?: number
          item_id: string
          last_updated?: string | null
          title?: string | null
          version?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          download_url?: string | null
          file_size?: string | null
          icon_name?: string | null
          id?: number
          item_id?: string
          last_updated?: string | null
          title?: string | null
          version?: string | null
        }
        Relationships: []
      }
      license_keys: {
        Row: {
          created_at: string | null
          id: number
          is_used: boolean | null
          key: string
          subscription_type: string
          used_at: string | null
          used_by_user_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          is_used?: boolean | null
          key: string
          subscription_type?: string
          used_at?: string | null
          used_by_user_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          is_used?: boolean | null
          key?: string
          subscription_type?: string
          used_at?: string | null
          used_by_user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "license_keys_used_by_user_id_fkey"
            columns: ["used_by_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          link: string | null
          message: string
          title: string
          type: string
          user_id: number
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          message: string
          title: string
          type?: string
          user_id: number
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          message?: string
          title?: string
          type?: string
          user_id?: number
        }
        Relationships: []
      }
      offsets: {
        Row: {
          additional_data: Json | null
          address: string
          bytes_at_700: string | null
          f4_offset: number
          id: string
          life_byte: number | null
          timestamp: string | null
        }
        Insert: {
          additional_data?: Json | null
          address: string
          bytes_at_700?: string | null
          f4_offset: number
          id?: string
          life_byte?: number | null
          timestamp?: string | null
        }
        Update: {
          additional_data?: Json | null
          address?: string
          bytes_at_700?: string | null
          f4_offset?: number
          id?: string
          life_byte?: number | null
          timestamp?: string | null
        }
        Relationships: []
      }
      product_safety_status: {
        Row: {
          id: number
          last_updated: string
          product_name: string
          status: string
        }
        Insert: {
          id?: number
          last_updated?: string
          product_name: string
          status: string
        }
        Update: {
          id?: number
          last_updated?: string
          product_name?: string
          status?: string
        }
        Relationships: []
      }
      proxy_settings: {
        Row: {
          enabled: boolean
          id: number
          password_hash: string | null
          port: number | null
          server_url: string | null
          updated_at: string
          updated_by: number | null
          username: string | null
        }
        Insert: {
          enabled?: boolean
          id?: number
          password_hash?: string | null
          port?: number | null
          server_url?: string | null
          updated_at?: string
          updated_by?: number | null
          username?: string | null
        }
        Update: {
          enabled?: boolean
          id?: number
          password_hash?: string | null
          port?: number | null
          server_url?: string | null
          updated_at?: string
          updated_by?: number | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proxy_settings_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      public_downloads: {
        Row: {
          created_at: string
          description: string | null
          display_order: number | null
          download_link: string
          file_size: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          download_link: string
          file_size?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          download_link?: string
          file_size?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          expire_date: string | null
          google_id: string | null
          hwid: string | null
          hwid_lock: boolean | null
          hwid_resets_used: number | null
          id: number
          ip_address: unknown | null
          is_banned: boolean | null
          is_tester: boolean | null
          last_login: string | null
          max_hwid_resets: number | null
          notes: string | null
          password: string
          subscription_status: string | null
          updated_at: string | null
          username: string
        }
        Insert: {
          created_at?: string | null
          expire_date?: string | null
          google_id?: string | null
          hwid?: string | null
          hwid_lock?: boolean | null
          hwid_resets_used?: number | null
          id?: number
          ip_address?: unknown | null
          is_banned?: boolean | null
          is_tester?: boolean | null
          last_login?: string | null
          max_hwid_resets?: number | null
          notes?: string | null
          password: string
          subscription_status?: string | null
          updated_at?: string | null
          username: string
        }
        Update: {
          created_at?: string | null
          expire_date?: string | null
          google_id?: string | null
          hwid?: string | null
          hwid_lock?: boolean | null
          hwid_resets_used?: number | null
          id?: number
          ip_address?: unknown | null
          is_banned?: boolean | null
          is_tester?: boolean | null
          last_login?: string | null
          max_hwid_resets?: number | null
          notes?: string | null
          password?: string
          subscription_status?: string | null
          updated_at?: string | null
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_all_activity_logs: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      log_activity: {
        Args: {
          p_action_type: string
          p_description: string
          p_ip_address?: unknown
          p_user_agent?: string
          p_user_id: number
        }
        Returns: string
      }
      reset_user_hwid: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      update_teammate_bytes: {
        Args: { new_bytes: string }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
