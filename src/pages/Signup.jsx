// pages/Signup.jsx
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../../supabaseClient'

export default function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    </div>
  );
}
