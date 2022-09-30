import {
  ImageIcon,
  Pencil1Icon,
  SunIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Header } from "../../components/Header";
import {
  DeleteButton,
  EditButton,
  NewTransactionButton,
} from "../../components/Header/styles";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsContainer, TransactionsTable } from "./styles";

import { Row } from "../../components/Row";
import { useTransactions } from "../../hooks/useTransactions";
import { numberFormat } from "../../utils/utils";

export function Transactions() {
  const { data: transactions, isFetching, error } = useTransactions();

  console.log(transactions);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions?.map((transaction) => (
              <Row
                key={transaction.id}
                id={transaction.id}
                description={transaction.description}
                price={numberFormat(transaction.price)}
                category={transaction.category}
                type={transaction.type}
              />
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
