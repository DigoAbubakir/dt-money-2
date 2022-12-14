import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { numberFormat } from "../../utils/utils";
import { SummaryCard, SummaryContainer } from "./styles";

type SumaryProps = {
  income: number;
  outcome: number;
  total: number;
}

export function Summary({ income, outcome, total } : SumaryProps) {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                  <span>Entradas</span>
                  <ArrowCircleUp size={32} color="#00b37e" />
                </header>

                <strong>{income ? numberFormat(income) : numberFormat(0)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                  <span>Saídas</span>
                  <ArrowCircleDown size={32} color="#f75a68" />
                </header>

                <strong>{outcome ? numberFormat(outcome) : numberFormat(0)}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                  <span>Total</span>
                  <CurrencyDollar size={32} color="#fff" />
                </header>

                <strong>{total ? numberFormat(total) : numberFormat(0)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}