import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Option } from "../../types/options";

export function useStates() {
  return useQuery({
    queryKey: ["states "],
    queryFn: () =>
      axios
        .get<Option[]>("http://localhost:8080/states")
        .then((res) => res.data),
  });
}

// export function useStates() {
// 	// Custom static data
// 	const statesData: Option[] = [
// 		{ id: 'AL', label: 'Alabama' },
// 		{ id: 'AK', label: 'Alaska' },
// 		{ id: 'AZ', label: 'Arizona' },
// 		{ id: 'CA', label: 'California' },
// 		{ id: 'NY', label: 'New York' },
// 		// Add more states as needed
// 	];

// 	// Using useQuery to return the static data
// 	return useQuery({
// 		queryKey: ['states'],
// 		queryFn: () => statesData,
// 		refetchOnWindowFocus: false, // Prevent refetching when the window is focused
// 	});
// }
export function useLanguages() {
  return useQuery({
    queryKey: ["languages "],
    queryFn: () =>
      axios
        .get<Option[]>("http://localhost:8080/languages")
        .then((res) => res.data),
  });
}

export function useGenders() {
	return useQuery({
		queryKey: ['genders'],
		queryFn: () =>
			axios
				.get<Option[]>('http://localhost:8080/genders')
				.then((res) => res.data),
	});
}
