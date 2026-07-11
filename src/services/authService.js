import { supabase } from "../lib/supabase";

/**
 * Register User
 */
export async function registerUser({
  fullName,
  email,
  password,
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Login User
 */
export async function loginUser(email, password) {
  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Logout User
 */
export async function logoutUser() {
  const { error } =
    await supabase.auth.signOut();

  if (error) {
    throw error;
  }
}

/**
 * Get Current User
 */
export async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw error;
  }

  return user;
}

/**
 * Get Current Session
 */
export async function getCurrentSession() {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    throw error;
  }

  return session;
}

/**
 * Send Password Reset Email
 */
export async function sendPasswordReset(email) {
  const { error } =
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

  if (error) {
    throw error;
  }
}

/**
 * Update Password
 */
export async function updatePassword(password) {
  const { data, error } =
    await supabase.auth.updateUser({
      password,
    });

  if (error) {
    throw error;
  }

  return data;
}export async function updatePassword(
  password
) {
  const { data, error } =
    await supabase.auth.updateUser({
      password,
    });

  if (error) {
    throw error;
  }

  return data;
}
