import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CloseIcon } from '../icons/Close';
import { useEffect, useState } from 'react';
import { Search } from './Search';
import { Coin } from '@/types/coin';
import { CoinsList } from './CoinsList';
import { DEFAULT_TOKENS } from '@/constants/ui';


function SelectorMenu({
  isOpen,
  onClose,
  selectCoin,
  activeCoin,
}: {
  isOpen: boolean,
  onClose: () => void,
  selectCoin: (coin: Coin) => void,
  activeCoin: Coin | null
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  }

  const data = DEFAULT_TOKENS;

  const filteredData = data?.filter((coin: Coin) => searchQuery
    ? coin.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coin.asset.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coin.network.toLowerCase().includes(searchQuery.toLowerCase()) : true);


  useEffect(() => {
    setSearchQuery('');
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="z-10 fixed inset-0 flex w-screen items-center justify-center bg-black/30 transition duration-200 ease-out data-[closed]:opacity-0 data-[closed]:scale-50 scale-100" id="token-menu" transition>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 duration-200 ease-out data-[closed]:opacity-0"
      />
      <DialogPanel className="transform transition-transform duration-300 ease-in-out data-[closed]:scale-95 data-[closed]:opacity-0 bg-background border-white relative flex flex-col h-full w-full min-h-[18rem] max-h-[95vh] overflow-auto px-6 pt-7 pb-0 sm:h-auto max-w-[50rem] rounded border border-b-4">
        <DialogTitle className="font-bold mb-8">You send</DialogTitle>
        <div onClick={onClose} className='cursor-pointer absolute top-8 right-7'>
          <CloseIcon />
        </div>

        <Search searchQuery={searchQuery} handleSearch={handleSearch} />

        <CoinsList data={filteredData} selectCoin={selectCoin} selectedCoin={activeCoin} />

      </DialogPanel>

    </Dialog >
  )
}

export default SelectorMenu;
