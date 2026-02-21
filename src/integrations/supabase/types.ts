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
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      accounts: {
        Row: {
          api_key_last_four: string | null
          business_name: string
          business_type: string | null
          callback_url: string | null
          created_at: string
          email: string
          id: string
          ip_whitelist: string[] | null
          live_api_key_hash: string | null
          min_payout_amount: number | null
          payout_phone: string | null
          payout_verified: boolean | null
          sandbox_api_key: string | null
          status: Database["public"]["Enums"]["account_status"]
          updated_at: string
          user_id: string
          webhook_url: string | null
        }
        Insert: {
          api_key_last_four?: string | null
          business_name?: string
          business_type?: string | null
          callback_url?: string | null
          created_at?: string
          email: string
          id?: string
          ip_whitelist?: string[] | null
          live_api_key_hash?: string | null
          min_payout_amount?: number | null
          payout_phone?: string | null
          payout_verified?: boolean | null
          sandbox_api_key?: string | null
          status?: Database["public"]["Enums"]["account_status"]
          updated_at?: string
          user_id: string
          webhook_url?: string | null
        }
        Update: {
          api_key_last_four?: string | null
          business_name?: string
          business_type?: string | null
          callback_url?: string | null
          created_at?: string
          email?: string
          id?: string
          ip_whitelist?: string[] | null
          live_api_key_hash?: string | null
          min_payout_amount?: number | null
          payout_phone?: string | null
          payout_verified?: boolean | null
          sandbox_api_key?: string | null
          status?: Database["public"]["Enums"]["account_status"]
          updated_at?: string
          user_id?: string
          webhook_url?: string | null
        }
        Relationships: []
      }
      admin_notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string | null
          metadata: Json | null
          read: boolean | null
          title: string
          type: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          message?: string | null
          metadata?: Json | null
          read?: boolean | null
          title: string
          type: string
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string | null
          metadata?: Json | null
          read?: boolean | null
          title?: string
          type?: string
        }
        Relationships: []
      }
      compliance_submissions: {
        Row: {
          admin_notes: string | null
          agreement_signed: boolean | null
          business_cert_name: string | null
          business_cert_url: string | null
          created_at: string | null
          current_step: number | null
          developer_id: string
          director_full_name: string | null
          expected_monthly_volume: string | null
          id: string
          kra_pin: string | null
          national_id_back_name: string | null
          national_id_back_url: string | null
          national_id_front_name: string | null
          national_id_front_url: string | null
          phone_number: string | null
          physical_address: string | null
          rejection_reason: string | null
          reviewed_at: string | null
          signatory_name: string | null
          signed_at: string | null
          status: string | null
          submitted_at: string | null
          updated_at: string | null
          use_case_description: string | null
        }
        Insert: {
          admin_notes?: string | null
          agreement_signed?: boolean | null
          business_cert_name?: string | null
          business_cert_url?: string | null
          created_at?: string | null
          current_step?: number | null
          developer_id: string
          director_full_name?: string | null
          expected_monthly_volume?: string | null
          id?: string
          kra_pin?: string | null
          national_id_back_name?: string | null
          national_id_back_url?: string | null
          national_id_front_name?: string | null
          national_id_front_url?: string | null
          phone_number?: string | null
          physical_address?: string | null
          rejection_reason?: string | null
          reviewed_at?: string | null
          signatory_name?: string | null
          signed_at?: string | null
          status?: string | null
          submitted_at?: string | null
          updated_at?: string | null
          use_case_description?: string | null
        }
        Update: {
          admin_notes?: string | null
          agreement_signed?: boolean | null
          business_cert_name?: string | null
          business_cert_url?: string | null
          created_at?: string | null
          current_step?: number | null
          developer_id?: string
          director_full_name?: string | null
          expected_monthly_volume?: string | null
          id?: string
          kra_pin?: string | null
          national_id_back_name?: string | null
          national_id_back_url?: string | null
          national_id_front_name?: string | null
          national_id_front_url?: string | null
          phone_number?: string | null
          physical_address?: string | null
          rejection_reason?: string | null
          reviewed_at?: string | null
          signatory_name?: string | null
          signed_at?: string | null
          status?: string | null
          submitted_at?: string | null
          updated_at?: string | null
          use_case_description?: string | null
        }
        Relationships: []
      }
      conditions: {
        Row: {
          account_id: string
          config: Json | null
          created_at: string
          id: string
          is_default: boolean | null
          name: string
        }
        Insert: {
          account_id: string
          config?: Json | null
          created_at?: string
          id?: string
          is_default?: boolean | null
          name: string
        }
        Update: {
          account_id?: string
          config?: Json | null
          created_at?: string
          id?: string
          is_default?: boolean | null
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "conditions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      disbursements: {
        Row: {
          account_id: string
          amount: number
          completed_at: string | null
          created_at: string
          hold_id: string | null
          id: string
          notes: string | null
          provider_ref: string | null
          recipient_name: string | null
          recipient_phone: string | null
        }
        Insert: {
          account_id: string
          amount: number
          completed_at?: string | null
          created_at?: string
          hold_id?: string | null
          id?: string
          notes?: string | null
          provider_ref?: string | null
          recipient_name?: string | null
          recipient_phone?: string | null
        }
        Update: {
          account_id?: string
          amount?: number
          completed_at?: string | null
          created_at?: string
          hold_id?: string | null
          id?: string
          notes?: string | null
          provider_ref?: string | null
          recipient_name?: string | null
          recipient_phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "disbursements_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "disbursements_hold_id_fkey"
            columns: ["hold_id"]
            isOneToOne: false
            referencedRelation: "holds"
            referencedColumns: ["id"]
          },
        ]
      }
      holds: {
        Row: {
          account_id: string
          amount: number
          cancel_reason: string | null
          cancelled_at: string | null
          condition_id: string | null
          created_at: string
          expiry_at: string | null
          id: string
          released_at: string | null
          transaction_id: string
        }
        Insert: {
          account_id: string
          amount: number
          cancel_reason?: string | null
          cancelled_at?: string | null
          condition_id?: string | null
          created_at?: string
          expiry_at?: string | null
          id?: string
          released_at?: string | null
          transaction_id: string
        }
        Update: {
          account_id?: string
          amount?: number
          cancel_reason?: string | null
          cancelled_at?: string | null
          condition_id?: string | null
          created_at?: string
          expiry_at?: string | null
          id?: string
          released_at?: string | null
          transaction_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "holds_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "holds_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      kyc_documents: {
        Row: {
          account_id: string
          address: string | null
          agreement_pdf_url: string | null
          agreement_signed: boolean | null
          business_cert_url: string | null
          created_at: string
          director_name: string | null
          expected_volume: string | null
          expires_at: string | null
          id: string
          id_document_url: string | null
          kra_pin: string | null
          phone: string | null
          rejection_reason: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: Database["public"]["Enums"]["kyc_status"]
          updated_at: string
        }
        Insert: {
          account_id: string
          address?: string | null
          agreement_pdf_url?: string | null
          agreement_signed?: boolean | null
          business_cert_url?: string | null
          created_at?: string
          director_name?: string | null
          expected_volume?: string | null
          expires_at?: string | null
          id?: string
          id_document_url?: string | null
          kra_pin?: string | null
          phone?: string | null
          rejection_reason?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: Database["public"]["Enums"]["kyc_status"]
          updated_at?: string
        }
        Update: {
          account_id?: string
          address?: string | null
          agreement_pdf_url?: string | null
          agreement_signed?: boolean | null
          business_cert_url?: string | null
          created_at?: string
          director_name?: string | null
          expected_volume?: string | null
          expires_at?: string | null
          id?: string
          id_document_url?: string | null
          kra_pin?: string | null
          phone?: string | null
          rejection_reason?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: Database["public"]["Enums"]["kyc_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "kyc_documents_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      support_tickets: {
        Row: {
          account_id: string
          assigned_to: string | null
          created_at: string
          description: string
          id: string
          priority: Database["public"]["Enums"]["ticket_priority"]
          resolved_at: string | null
          status: Database["public"]["Enums"]["ticket_status"]
          subject: string
          updated_at: string
        }
        Insert: {
          account_id: string
          assigned_to?: string | null
          created_at?: string
          description?: string
          id?: string
          priority?: Database["public"]["Enums"]["ticket_priority"]
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["ticket_status"]
          subject: string
          updated_at?: string
        }
        Update: {
          account_id?: string
          assigned_to?: string | null
          created_at?: string
          description?: string
          id?: string
          priority?: Database["public"]["Enums"]["ticket_priority"]
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["ticket_status"]
          subject?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "support_tickets_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          account_id: string
          amount: number
          completed_at: string | null
          created_at: string
          currency: string
          description: string | null
          fee_amount: number | null
          fee_percentage: number | null
          id: string
          phone: string | null
          provider_ref: string | null
        }
        Insert: {
          account_id: string
          amount: number
          completed_at?: string | null
          created_at?: string
          currency?: string
          description?: string | null
          fee_amount?: number | null
          fee_percentage?: number | null
          id?: string
          phone?: string | null
          provider_ref?: string | null
        }
        Update: {
          account_id?: string
          amount?: number
          completed_at?: string | null
          created_at?: string
          currency?: string
          description?: string | null
          fee_amount?: number | null
          fee_percentage?: number | null
          id?: string
          phone?: string | null
          provider_ref?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      account_status:
        | "EMAIL_UNVERIFIED"
        | "EMAIL_VERIFIED"
        | "PENDING"
        | "APPROVED"
        | "REJECTED"
        | "SUSPENDED"
      app_role: "admin" | "user"
      hold_status: "pending" | "held" | "released" | "cancelled"
      kyc_status: "DRAFT" | "PENDING" | "APPROVED" | "REJECTED"
      ticket_priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT"
      ticket_status: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED"
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
    Enums: {
      account_status: [
        "EMAIL_UNVERIFIED",
        "EMAIL_VERIFIED",
        "PENDING",
        "APPROVED",
        "REJECTED",
        "SUSPENDED",
      ],
      app_role: ["admin", "user"],
      hold_status: ["pending", "held", "released", "cancelled"],
      kyc_status: ["DRAFT", "PENDING", "APPROVED", "REJECTED"],
      ticket_priority: ["LOW", "MEDIUM", "HIGH", "URGENT"],
      ticket_status: ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"],
    },
  },
} as const
