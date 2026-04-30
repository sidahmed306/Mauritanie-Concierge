-- Create table for contact messages
CREATE TABLE contact_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  country TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT,
  service_type TEXT NOT NULL,
  arrival_date DATE,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create table for testimonials
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  review TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Security: Enable RLS (Row Level Security)
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Anonymous users can insert requests, but cannot read them
CREATE POLICY "Anyone can insert contact requests" ON contact_requests
  FOR INSERT WITH CHECK (true);

-- Anonymous users can view testimonials
CREATE POLICY "Anyone can view testimonials" ON testimonials
  FOR SELECT USING (true);

-- Admins (authenticated users) can manage all
CREATE POLICY "Admins can view and manage contact requests" ON contact_requests
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can manage testimonials" ON testimonials
  FOR ALL USING (auth.role() = 'authenticated');
