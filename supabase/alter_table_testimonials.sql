-- Run this query in your Supabase SQL Editor to add the missing columns to an existing testimonials table

ALTER TABLE testimonials 
ADD COLUMN IF NOT EXISTS tour_name TEXT,
ADD COLUMN IF NOT EXISTS photo_url TEXT,
ADD COLUMN IF NOT EXISTS approved BOOLEAN DEFAULT false;
