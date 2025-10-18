-- Create notification_reads junction table for per-user read tracking
CREATE TABLE public.notification_reads (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  notification_id uuid NOT NULL REFERENCES public.notifications(id) ON DELETE CASCADE,
  user_id integer NOT NULL,
  read_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(notification_id, user_id)
);

-- Remove is_read column from notifications table as it's now tracked per-user
ALTER TABLE public.notifications DROP COLUMN IF EXISTS is_read;

-- Enable RLS on notification_reads
ALTER TABLE public.notification_reads ENABLE ROW LEVEL SECURITY;

-- Users can view their own read status
CREATE POLICY "Users can view their own read status"
ON public.notification_reads
FOR SELECT
USING (true);

-- Users can insert their own read status
CREATE POLICY "Users can insert their own read status"
ON public.notification_reads
FOR INSERT
WITH CHECK (true);

-- Admins can manage all read statuses
CREATE POLICY "Admins can manage all read statuses"
ON public.notification_reads
FOR ALL
USING (EXISTS (
  SELECT 1 FROM public.admins WHERE admins.email = auth.email()
));

-- Create index for better performance
CREATE INDEX idx_notification_reads_user_id ON public.notification_reads(user_id);
CREATE INDEX idx_notification_reads_notification_id ON public.notification_reads(notification_id);