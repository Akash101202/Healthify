import supabase from "./supabase";

export async function getRecords() {
  const { data, error } = await supabase.from("Medical_Records").select(`
      diagnosis,
      date,
      notes,
      Doctors(name)
    `);

  if (error) {
    console.error("Couldn't get your records:", error);
    throw new Error("Failed to load records");
  }

  return data;
}
