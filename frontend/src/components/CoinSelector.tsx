import { useState } from 'react'
import { Coin } from '@/types/coin';
import { ArrowDown } from '@/icons/ArrowDown';
import SelectorMenu from './SelectorMenu';

export const CoinSelector = ({
  activeCoin,
  setActiveCoin,
}: {
  activeCoin: Coin | null;
  setActiveCoin: (coin: Coin) => void;
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  const [imgSrc, setImgSrc] = useState(`/coin-icons/${activeCoin?.asset.toLowerCase()}.svg`);

  const selectActiveCoin = (coin: Coin) => {
    setActiveCoin(coin);
    setImgSrc(`/coin-icons/${coin.asset.toLowerCase()}.svg`);
    setOpenMenu(false);
  }

  return (
    <>
      <button
        onClick={() => setOpenMenu(true)}
        aria-label="Select token"
        aria-haspopup="menu"
        aria-expanded={openMenu}
        aria-controls="token-menu"
        className="dark:border-white rounded-md border border-b-[6px] dark:bg-background
                  dark:text-white h-full w-full py-3
                  cursor-pointer flex flex-col items-center justify-center p-0 text-lg"
        type="button">

        {activeCoin ? (
          <div className="flex place-items-center">
            <div className="relative grid h-12 w-12 place-items-center">
              <img
                className="h-12 w-12 rounded-full"
                src={imgSrc}
                onError={() => setImgSrc('/coin-icons/eth.svg')}
                alt={`${activeCoin.displayName} logo`} />
            </div>
            <div className="flex w-[calc(100%-3rem)] flex-col items-start pl-5">
              <div className="flex">
                <span className="w-auto pr-2 text-left text-lg">{activeCoin.asset}</span>
                <ArrowDown />
              </div>
            </div>
          </div>
        ) : <div className="h-12 flex justify-center items-center">Select coin</div>}

      </button>

      <SelectorMenu isOpen={openMenu} onClose={() => setOpenMenu(false)} selectCoin={selectActiveCoin} activeCoin={activeCoin} />
    </>
  )
}