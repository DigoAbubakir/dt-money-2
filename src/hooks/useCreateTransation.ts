import { useMutation } from "react-query";
import { api } from "../service/api";
import { queryClient } from "../service/queryClient";
import { AxiosError } from "axios";

export type createTransactionFormData = {
    description: string,
    price: number,
    category: string,
    type: string,
};

type ErrorType = {
  title: string;
};

export function useCreateTransaction() {
  return useMutation(
    async (transaction: createTransactionFormData) => {
      const response = await api.post("/transaction", {
        ...transaction,
      });
      return response.data.user;
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(["transactions"]);
      },
      onError: (error: AxiosError<ErrorType>) => {
        console.log("DEU ERRO")!
      },
    }
  );
}
