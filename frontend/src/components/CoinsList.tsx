import { Coin } from "@/types/coin";
import { CoinListItem } from "./CoinListItem";

export const CoinsList = ({
  data,
  selectCoin,
  selectedCoin,
}: {
  data: Coin[];
  selectCoin: (coin: Coin) => void;
  selectedCoin: Coin | null;
}) => {

  return (
    <>
      <ul>
        {data.map((coin: Coin) => (
          <li key={coin.id}>
            <CoinListItem coin={coin} selectCoin={selectCoin} isSelected={selectedCoin ? selectedCoin.id === coin.id : false} />
          </li>
        ))}
      </ul>
    </>
  );
}