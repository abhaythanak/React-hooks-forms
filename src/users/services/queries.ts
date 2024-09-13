import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Option } from "../../types/options";

export function useStates() {
  return useQuery({
    queryKey: ["states "],
    queryFn: () =>
      axios
        .get<Option[]>("http://localhost:8000/states")
        .then((res) => res.data),
  });
}

export function useLanguages() {
  return useQuery({
    queryKey: ["languages "],
    queryFn: () =>
      axios
        .get<Option[]>("http://localhost:8000/languages")
        .then((res) => res.data),
  });
}
