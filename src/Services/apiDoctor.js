import supabase from "./supabase";

export async function getDoctors() {
  const { data, error } = await supabase.from("Doctors").select("*");

  if (error) {
    console.error("Error fetching Doctors", error.message);
    throw new Error("Failed to load Doctors");
  }

  return data;
}
