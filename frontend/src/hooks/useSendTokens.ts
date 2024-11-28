import { useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { ERC20_ABI } from "@/constants/abi";

export const useSendTokens = (tokenAddress: `0x${string}`) => {
  const { data: hash, writeContract, isPending, isError } = useWriteContract();

  const sendTokens = (recipient: `0x${string}`, amount: string, decimals: number) => {
    writeContract({
      address: tokenAddress,
      abi: ERC20_ABI,
      functionName: "transfer",
      args: [recipient, parseUnits(amount, decimals)],
    });
  };

  return { hash, sendTokens, isPending, isError };
};
