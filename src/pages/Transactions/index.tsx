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
import { Row } from "../../components/Row";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <Row description="Marmitex" price={10.00} category="Alimentação" type="INCOME"  />
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
