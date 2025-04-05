import supabase from "./supabase";

export async function getPatient() {
  const { data, error } = await supabase.from("Patient").select("*");

  if (error) {
    console.error(error);
  }

  return data;
}
