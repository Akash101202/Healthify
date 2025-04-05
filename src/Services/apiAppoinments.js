import supabase from "./supabase";

export async function getAppointments() {
  const { data, error } = await supabase
    .from("Appointments")
    .select(
      `
      *,
      Doctors (
        name,
        specialty
      )
    `
    )
    .order("date", { ascending: true }); // optional: sort by date

  if (error) {
    console.error("Error fetching appointments:", error.message);
    throw new Error("Failed to load appointments");
  }

  return data;
}
