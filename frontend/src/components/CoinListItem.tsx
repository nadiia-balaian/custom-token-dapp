import { CheckIcon } from "@/icons/CheckIcon";
import { Coin } from "@/types/coin";
import { useState } from "react";

export const CoinListItem = ({ coin, selectCoin, isSelected }: { coin: Coin, selectCoin: (coin: Coin) => void, isSelected: boolean }) => {
  const [imgSrc, setImgSrc] = useState(`/coin-icons/${coin.asset.toLowerCase()}.svg`);

  return (

    <button
      onClick={() => selectCoin(coin)}
      aria-label={`Select ${coin.displayName}`}
      name={`Select ${coin.displayName}`}
      className="font-mono_heading hover:bg-hover not-disabled:focus:bg-hover py-8 grid h-14 w-full grid-cols-[1fr_8rem] place-content-center items-center justify-between rounded"
      type="button"
      role="button"
    >
      <span className="flex items-center justify-start truncate py-2">

        <div className="ml-5 relative mr-4 shrink-0">
          <img
            alt={coin.displayName}
            src={imgSrc}
            onError={() => setImgSrc('/coin-icons/eth.svg')}
            className="h-9 block aspect-square rounded-full" />
          <img alt={coin.network} className="absolute bottom-[-4px] right-[-4px] block h-4 w-4 rounded-full" src="/coin-icons/eth.svg" />
        </div>

        <div className="text-left truncate">
          <div className="mr-2 truncate font-medium text-lg tracking-wide">{coin.displayName}</div>

          <div className="text-secondary snap-end font-light">
            {coin.asset}
            <span className="mx-1">•</span>
            <span className="text-primary uppercase">{coin.network}</span>
          </div>
        </div>
      </span>

      {/* TODO: show icon only item is selected */}
      {isSelected && (
        <div className="flex justify-self-end" data-testid="check-icon">
          <div className="relative z-1 text-right font-light">
            <CheckIcon />
          </div>
        </div>
      )}

    </button>

  );
};