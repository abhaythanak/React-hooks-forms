import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Option } from "../../types/options"

export function useState(){
    return useQuery({
        queryKey: ["states "],
        queryFn: () => axios.get<Option[]>('http://localhost:8000/states').then(res => res.data),
    
    })
}