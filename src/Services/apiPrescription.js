import supabase from "./supabase";

export async function getPrescription() {
  const { data, error } = await supabase
    .from("Prescriptions")
    .select(`medicine,date,Doctors(name)`)
    .order("date", { ascending: true });

  if (error) {
    console.error("Error fetching appointments:", error.message);
    throw new Error("Failed to load appointments");
  }

  return data;
}
