"use server";

import { createAdminSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Email dan password harus diisi." };
  }

  const supabase = await createAdminSupabaseClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: email.toString(),
    password: password.toString(),
  });

  if (error) {
    return { error: "Login gagal: Email atau password salah." };
  }

  redirect("/admin");
}

export async function logout() {
  const supabase = await createAdminSupabaseClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

