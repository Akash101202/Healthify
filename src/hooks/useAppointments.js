import { useQuery } from "@tanstack/react-query";
import { getAppointments } from "../Services/apiAppoinments";

export const useAppointments = () =>
  useQuery({
    queryKey: ["appointments"],
    queryFn: getAppointments,
  });
