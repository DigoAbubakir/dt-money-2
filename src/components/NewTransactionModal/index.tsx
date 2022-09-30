import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { Formik, Field } from "formik";
import { useCreateTransaction } from "../../hooks/useCreateTransation";
import { AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { useState } from "react";

const initialValues = {
  description: "",
  price: "",
  category: "",
  type: "",
};

export function NewTransactionModal() {
  const [open, setOpen] = useState(true);
  
  const createTransaction = useCreateTransaction();

  const handleCreateTransaction = async (values: any) => {
    createTransaction.mutate(values);
  };

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Formik
          initialValues={initialValues}
          onSubmit={handleCreateTransaction}
        >
          {({ handleSubmit, handleChange, values, resetForm }) => (
            <>
              <form action="" onSubmit={handleSubmit}>
                <input
                  name="description"
                  type="text"
                  placeholder="Descrição"
                  onChange={handleChange}
                  value={values.description}
                />

                <input
                  name="price"
                  type="number"
                  placeholder="Preço"
                  onChange={handleChange}
                  value={values.price}
                />

                <input
                  name="category"
                  type="text"
                  placeholder="Categoria"
                  onChange={handleChange}
                  value={values.category}
                />

                <TransactionType>
                  <TransactionTypeButton variant="income" value="INCOME">
                    <Field type="radio" name="type" value="INCOME" />
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant="outcome" value="OUTCOME">
                    <Field type="radio" name="type" value="OUTCOME" />
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>

                
                  <button type="submit">Cadastrar</button>
                
              </form>
            </>
          )}
        </Formik>
      </Content>
    </Dialog.Portal>
  );
}
