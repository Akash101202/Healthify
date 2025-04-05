import { useQuery } from "@tanstack/react-query";
import { getDoctors } from "../Services/apiDoctor";

export const useDoctor = () =>
  useQuery({
    queryKey: ["Doctors"],
    queryFn: getDoctors,
  });
