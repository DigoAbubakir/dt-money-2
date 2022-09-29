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

const AlertDialogTransaction = () => (
  <Dialog.Portal>
    <Overlay />

    <Content>
      <Dialog.Title>Deletar Transação</Dialog.Title>

      <CloseButton>
        <X size={24} />
      </CloseButton>

      <TextContent>
        Essa ação não pode ser desfeita. Isso vai deletar permanentemente a transação da base de dados, deseja prosseguir?
      </TextContent>

      <ContentButton>
        <button>Cancelar</button>
        <button>Deletar</button>
      </ContentButton>
      
    </Content>
  </Dialog.Portal>
);

export default AlertDialogTransaction;
