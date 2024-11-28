import React from "react";
import { LinkIcon } from "@/icons/LinkIcon";

interface TransactionStatusProps {
  hash: string;
  balance: string | number;
  symbol: string;
}

export const TransactionStatus: React.FC<TransactionStatusProps> = ({ hash }) => {
  const etherscanUrl = `https://sepolia.etherscan.io/tx/${hash}`;

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-success font-semibold">Transaction Successful!</p>
      <a
        href={etherscanUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-xs underline flex gap-1"
        aria-label="View transaction on Etherscan"
      >
        View on Sepolia Explorer
        <span className="w-4 h-4">
          <LinkIcon />
        </span>
      </a>
    </div>
  );
};
