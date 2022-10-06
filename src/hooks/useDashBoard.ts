import { useQuery } from "react-query";
import { api } from "../service/api";

type Dashboard = {
  income: number;
  outcome: number;
  total: number;
}

export async function getDashboard(): Promise<Dashboard> {
    const response = await api.get('/dashboard');
    return response.data;
}

export function useDashboard() {
    return useQuery(['dashboard'], () => getDashboard(), {
        staleTime: 0
    })
}