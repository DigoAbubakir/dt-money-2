import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { violet, blackA, red, mauve } from "@radix-ui/colors";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import {
  CloseButton,
  Content,
  ContentButton,
  Overlay,
  TextContent,
} from "./styles";
import { X } from "phosphor-react";
import { useMutation } from "react-query";
import { api } from "../../service/api";
import { queryClient } from "../../service/queryClient";

type PropsDialogTransaction = {
  id: number;
};

function useDeleteTransaction() {
  return useMutation(async (transactionId: number) => {
    const response = await api.delete(`/transaction/${transactionId}`)
    return response.data.user;
  }, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['transactions'])
    }, onError: (err: any) => {
    
    }
  });
}

const AlertDialogTransaction = ({ id }: PropsDialogTransaction) => {

  const deleteTransaction = useDeleteTransaction();

  function handleDeleteTransaction(id: number): void {
     deleteTransaction.mutate(id)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Deletar Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <TextContent>
          Essa ação não pode ser desfeita. Isso vai deletar permanentemente a
          transação da base de dados, deseja prosseguir?
        </TextContent>

        <ContentButton>
          <button>Cancelar</button>
          <button onClick={() => handleDeleteTransaction(id)}>Deletar</button>
        </ContentButton>
      </Content>
    </Dialog.Portal>
  );
};

export default AlertDialogTransaction;
