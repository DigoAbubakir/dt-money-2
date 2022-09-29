import { ImageIcon, Pencil1Icon, SunIcon, TrashIcon } from "@radix-ui/react-icons";
import { Header } from "../../components/Header";
import { DeleteButton, EditButton, NewTransactionButton } from "../../components/Header/styles";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import * as Dialog from "@radix-ui/react-dialog";
import {
  OptionsButton,
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import AlertDialogTransaction from "../../components/Dialog";
import { EditTransactionModal } from "../../components/EditTransactionModal";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>

            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 59,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
              <td>
                <OptionsButton>
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <EditButton>
                        <Pencil1Icon />
                      </EditButton>
                    </Dialog.Trigger>

                    <EditTransactionModal />
                  </Dialog.Root>

                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <DeleteButton>
                        <TrashIcon />
                      </DeleteButton>
                    </Dialog.Trigger>

                    <AlertDialogTransaction />
                  </Dialog.Root>
                </OptionsButton>
              </td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
