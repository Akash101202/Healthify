import { useQuery } from "@tanstack/react-query";
import { getRecords } from "../Services/apiRecords";

export const useRecords = () =>
  useQuery({
    queryKey: ["Medical_Records"],
    queryFn: getRecords,
  });
