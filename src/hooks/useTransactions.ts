import { useQuery } from "react-query";
import { api } from "../service/api";

type Transaction = {
    id: number;
    description: string;
    price: number;
    category: string;
    type: string;
}

export async function getTransactions(): Promise<Transaction[]> {
    const response = await api.get('/transaction');
    return response.data;
}

export function useTransactions() {
    return useQuery(['transactions'], () => getTransactions(), {
        staleTime: 0
    })
}