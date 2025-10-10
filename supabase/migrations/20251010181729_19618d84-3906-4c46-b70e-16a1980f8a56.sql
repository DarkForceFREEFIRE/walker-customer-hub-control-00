-- Create public downloads table
CREATE TABLE public.public_downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  download_link text NOT NULL,
  file_size text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  display_order integer DEFAULT 0
);

-- Enable RLS
ALTER TABLE public.public_downloads ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Anyone can view public downloads"
ON public.public_downloads
FOR SELECT
TO public
USING (true);

-- Allow authenticated admins to manage
CREATE POLICY "Admins can manage public downloads"
ON public.public_downloads
FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.admins
    WHERE admins.email = auth.email()
  )
);

-- Add trigger for updated_at
CREATE TRIGGER update_public_downloads_updated_at
BEFORE UPDATE ON public.public_downloads
FOR EACH ROW
EXECUTE FUNCTION public.update_timestamp();

-- Add index for ordering
CREATE INDEX idx_public_downloads_order ON public.public_downloads(display_order, created_at);