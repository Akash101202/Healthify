import { useQuery } from "@tanstack/react-query";
import { getBillings } from "../Services/apiBilling";

export const useBilling = () =>
  useQuery({
    queryKey: ["Billing"],
    queryFn: getBillings,
  });
