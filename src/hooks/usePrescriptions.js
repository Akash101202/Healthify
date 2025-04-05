import { useQuery } from "@tanstack/react-query";
import { getPrescription } from "../Services/apiPrescription";

export const usePrescriptions = () =>
  useQuery({
    queryKey: ["Prescriptions"],
    queryFn: getPrescription,
  });
