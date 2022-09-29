import * as Dialog from "@radix-ui/react-dialog";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { OptionsButton, PriceHighlight } from "../../pages/Transactions/styles";
import AlertDialogTransaction from "../Dialog";
import { EditTransactionModal } from "../EditTransactionModal";
import { DeleteButton, EditButton } from "../Header/styles";

type TransactionType = {
    description: string;
    price: number;
    category: string;
    type: string;
}

export function Row({ description, price, category, type }: TransactionType) {
  return (
    <tr>
      <td width="50%">{description}</td>
      <td>
        <PriceHighlight variant={type === 'INCOME' ? 'income' : 'outcome'}>{price}</PriceHighlight>
      </td>
      <td>{category}</td>
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
  );
}
