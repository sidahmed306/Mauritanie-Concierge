-- Security fix: run once in the Supabase SQL editor.
-- Before: anyone could read ALL testimonials (including unapproved ones) through the public API.
-- After: visitors only see approved testimonials; the signed-in admin still sees everything.

DROP POLICY IF EXISTS "Anyone can view testimonials" ON testimonials;

CREATE POLICY "Anyone can view approved testimonials" ON testimonials
  FOR SELECT USING (approved = true OR auth.role() = 'authenticated');

-- Visitors must still be able to submit a review (it stays hidden until approved).
DROP POLICY IF EXISTS "Anyone can submit a testimonial" ON testimonials;
CREATE POLICY "Anyone can submit a testimonial" ON testimonials
  FOR INSERT WITH CHECK (approved = false);

-- Also recommended in the Supabase dashboard:
--   Authentication > Providers > Email: disable "Allow new users to sign up",
--   so nobody else can create an account that counts as "authenticated".
