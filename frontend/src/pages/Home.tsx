import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import { truncateEthAddress } from "@/utils/truncateAddress";

export const Home = () => {
  const { isConnected, address } = useAccount();
  const navigate = useNavigate();

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Welcome to test dApp</h1>
      {isConnected && address ? <p>Your wallet address is <span className="text-primary">{truncateEthAddress(address)}</span></p> : <p>You are not logged in</p>}

      <button onClick={() => navigate('/transfer')}
        className={`mt-5 dark:border-white rounded-md border border-b-[6px] bg-background
      text-white h-full w-full py-3 cursor-pointer flex flex-col items-center
      justify-center p-0 text-lg ${!isConnected ? 'bg-gray-600 cursor-not-allowed text-gray-400' : ''}`}
        type="button"
        disabled={!isConnected}>Go to transfer screen</button>
    </div >
  )
}