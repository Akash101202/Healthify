import supabase from "./supabase";

export async function getBillings() {
  const { data, error } = await supabase
    .from("Billing")
    .select("*")
    .order("date", { ascending: false });

  if (error) {
    console.error("Error fetching appointments:", error.message);
    throw new Error("Failed to load appointments");
  }

  // Add a month field manually
  const withMonth = data.map((billing) => ({
    ...billing,
    month: new Date(billing.date).getMonth() + 1, // JS months are 0-indexed
  }));

  return withMonth;
}
