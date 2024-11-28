import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { CoinSelector } from "@/components/CoinSelector";
import { InputField } from "@/components/InputField";
import { TransactionStatus } from "@/components/TransactionStatus";
import { useTokenBalance } from "@/hooks/useTokenBalance";
import { useSendTokens } from "@/hooks/useSendTokens";
import { DEFAULT_TOKENS } from "@/constants/ui";
import { DEFAULT_DECIMALS } from "@/constants/default";
import { formatUnits } from "viem";

export const TransferScreen: React.FC = () => {
  const [currentToken, setCurrentToken] = useState(DEFAULT_TOKENS[0]);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const { address, isConnected } = useAccount();

  const { balance, nativeBalance } = useTokenBalance(currentToken.tokenAddress, address);
  const { hash, sendTokens, isPending } = useSendTokens(currentToken.tokenAddress);

  const formattedBalance = currentToken.isNative && nativeBalance
    ? formatUnits(nativeBalance?.value, nativeBalance?.decimals)
    : balance
      ? formatUnits(balance as bigint, DEFAULT_DECIMALS)
      : "0";

  const handleSend = () => {
    sendTokens(recipient as `0x${string}`, amount, DEFAULT_DECIMALS);
  };

  useEffect(() => {
    if (hash) {
      setRecipient("");
      setAmount("");
    }
  }, [hash]);

  const isDisabled = !recipient || !amount || isPending || !isConnected;

  return (
    <div>
      <div className="flex gap-4 flex-col">
        <h3>Transfer Tokens</h3>

        <div>
          Your balance is{" "}
          <span className="text-primary">
            {Number(formattedBalance).toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 4,
            })}  {currentToken.asset}
          </span>
        </div>

        <CoinSelector activeCoin={currentToken} setActiveCoin={setCurrentToken} />

        <InputField
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Recipient Address"
          ariaLabel="recipient"
        />
        <InputField
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          ariaLabel="amount"
        />
        <button
          aria-disabled={isDisabled}
          onClick={handleSend}
          disabled={isDisabled}
          className={`mt-2 dark:border-white rounded-md border border-b-[6px] bg-background
            text-primary h-full w-full py-3 flex flex-col items-center justify-center p-0 text-lg 
            transition-all duration-200 
            ${isDisabled
              ? "bg-gray-600 text-gray-400 cursor-not-allowed border-gray-400"
              : "bg-primary text-white cursor-pointer hover:bg-primary-dark"
            }`}
          type="button"
        >
          {isPending ? "Transferring..." : "Send Tokens"}
        </button>

        {hash && (
          <TransactionStatus
            hash={hash}
            balance={formattedBalance}
            symbol={currentToken.asset}
          />
        )}
      </div>
    </div>
  );
};
